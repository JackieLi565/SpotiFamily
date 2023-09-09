const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.outstandingBalancePenalty = functions.pubsub
  .schedule("0 0 * * *")
  .timeZone("America/New_York")
  .onRun(async (context) => {
    try {
      const collectionDocs = await db.collection("family").get();

      collectionDocs.forEach(async (doc) => {
        const paymentHistory = doc.data().payment.paymentHistory;
        const docId = doc.id;
        const currentTimestamp = admin.firestore.Timestamp.now();
        const currentDate = new Date(currentTimestamp.toMillis());

        // start increasing monthly fee after the 12th
        const paymentStart = admin.firestore.Timestamp.fromDate(
          new Date(currentDate.getFullYear(), currentDate.getMonth(), 12)
        );

        if (
          paymentHistory.length > 0 &&
          paymentHistory[paymentHistory.length - 1].toMillis() <
            paymentStart.toMillis()
        ) {
          await db
            .collection("family")
            .doc(docId)
            .update({
              "payment.outstandingBalance":
                admin.firestore.FieldValue.increment(0.1),
            });
        }
      });
    } catch (e) {
      console.error(e);
    }

    return;
  });

exports.paymentStatusReset = functions.pubsub
  .schedule("0 0 9 * *")
  .timeZone("America/New_York")
  .onRun(async (context) => {
    try {
      const familyCollectionRef = db.collection("family");
      const batch = db.batch();

      const snapshot = await familyCollectionRef.get();

      snapshot.forEach((doc) => {
        const docRef = familyCollectionRef.doc(doc.id);
        batch.update(docRef, { "payment.paymentStatus": false });
      });

      await batch.commit();
    } catch (e) {
      console.error(e);
    }
    return;
  });
