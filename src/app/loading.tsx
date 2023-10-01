import AnimateFade from "@/components/Animations/Fade";
import { LoadingOutlined } from "@ant-design/icons";
const Page = () => {
  return (
    <main className="flex-1 flex justify-center items-center ">
      <AnimateFade type="center">
        <LoadingOutlined className="text-5xl text-primary-green" />
      </AnimateFade>
    </main>
  );
};

export default Page;
