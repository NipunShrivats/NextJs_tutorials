import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="text-red-600">This is user home page</div>
      <div
        style={{
          border: "2px solid red",
          position: "relative",
          display: "flex",
          width: "500px",
          height: "500px",
        }}
      >
        <Image
          src="/Master.jpeg"
          alt="Master image"
          // width={500}
          // height={500}
          fill
          quality={100}
          priority={false}
          placeholder="blur"
          blurDataURL="/Master.jpeg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
        />
      </div>
    </>
  );
};

export default page;
