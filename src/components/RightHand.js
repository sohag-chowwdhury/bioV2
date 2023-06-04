var style = {
    position: "fixed",
    right: "4%",
    bottom: "0%",
  };
  
  function RightHand() {
    return (
      <div className="hidden lg:block">
        <div style={style}>
          <h1
            className="font-sanf dark:text-green-700 text-green-400 font-semibold text-sm px-1"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {" "}
            <a class="mailto" href="mailto:sohag02.c@gmail.com">
              {" "}
              sohag02.c@gmail.com
            </a>
          </h1>
          <div
            style={{ height: "6em" }}
            className="border-l-2 mt-4 ml-3 dark:border-green-700 border-green-300"
          ></div>
        </div>
      </div>
    );
  }
  
  export default RightHand;
  