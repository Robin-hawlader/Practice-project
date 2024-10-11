import React from "react";

const ProductBanner = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2 px-2">
      <div className="relative text-center ">
        <img
          src="https://s3-alpha-sig.figma.com/img/ffec/0e0c/cf9df1d3c9c1d489d4b48671f47332ba?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLyF18lLWQcZWJCT8tJ7ktqJQOdgYrS-Fj2Wv1QlZ3HANmfaOQcl8N~cGlMU4JmkGmBRywUihZMXkaR7KknrlRQCDFt-DFtIEF3F0V36gZ8hEoezI78lkz1rXtVQGVtM6QNinVPe1mseibNcemNi~1WobvNvrIbTlErx1H7QCnhFI0cs2j7zqEYwK3DucKDqEOwMMA2yadepq4zeccCenc6tMv1Z5KwkW5vJPCMvIL8dyOBY~y0T0MTb1tmdDhrsV5~gvmM9kLrR0camsU7jxZUKodIt4NkjFST1Lz-k4JCQt7sHWPE-oWbCRtXJdfgajde-MXUItAWhIrOZQVkZSQ__"
          alt=""
        />
        <div className="w-full absolute top-0 left-0 text-center mt-40">
          <h1 className="text-yellow-500 font-sans text-6xl">Apple Product</h1>
          <p className="text-white mx-14 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            voluptatibus doloribus assumenda ex odit dicta.
          </p>
          <div className="h-10 justify-start items-center gap-4 inline-flex mt-4">
            <div className="px-6 py-2 bg-[#333333] hover:bg-[#fbb03b] transition duration-300 rounded-[99px] justify-center items-center gap-2 flex">
              <button className="text-white text-center text-base font-normal font-['DM Sans'] leading-normal">
                Read More
              </button>
            </div>
            <div className="px-6 py-2 rounded-[99px] border hover:border-yellow-600 hover:text-yellow-600 text-white transition duration-300 border-white justify-center items-center gap-2 flex">
              <button className="text-base font-normal font-['DM Sans'] leading-normal">
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative text-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/0592/bc3a/7e84caf6fecc1e7a729c12e1c9b77a4e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KHRRWfHCuFBWlQVfrOHqLGbtI3TpTPPwnYIHT7rb1BMI5iYD0MNFXB1GHagXRmtPaXyh7ro2D3lU4RnQ87r59vQFLygU8XkcYHcGlV672VFMQ92zWd7gUicHTeQ4H3HhWXFGA5z2I4s0OVyE-NPJ0cSYY6uZzT-6HOVQSFCWvZPFexX76yDqIzU0zt7slODiA5zL-DKD32HrQ4vQiPfzVvo2467FBPLmnJENOibu99kIK64pbgrLF9IUPfZgz0SKxG2Be0XgK2E5ZsbOEo~8AkcIWm5HlstRk-~Ht6MqeOfCTsUPaQcCkGDFErAlTIOOpqwSxMgw82vD4AWLdlTC0w__"
          alt=""
        />
        <div className="w-full absolute top-0 left-0 text-center mt-10">
          <h1 className="text-yellow-500 font-sans text-6xl">Apple Product</h1>
          <p className="text-white mx-14 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            voluptatibus doloribus assumenda ex odit dicta.
          </p>
          <div className="h-10 justify-start items-center gap-4 inline-flex mt-4">
            <div className="px-6 py-2 bg-[#333333] hover:bg-[#fbb03b] transition duration-300 rounded-[99px] justify-center items-center gap-2 flex">
              <button className="text-white text-center text-base font-normal font-['DM Sans'] leading-normal">
                Read More
              </button>
            </div>
            <div className="px-6 py-2 rounded-[99px] border hover:border-yellow-600 hover:text-yellow-600 text-white transition duration-300 border-white justify-center items-center gap-2 flex">
              <button className="text-base font-normal font-['DM Sans'] leading-normal">
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
