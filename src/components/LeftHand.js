var style = {
    position: "fixed",
    left: "2%",
    bottom: "0%",
    width: "10%",
  };
  
  function LeftHand() {
    return (
      <div className="hidden lg:block">
        <div style={style}>
          <div>
            <a
              href="https://www.instagram.com/sohago2.c/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="rounded-full bg-transparent mt-1 p-2 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent"
              >
                {" "}
                <img src="https://img.icons8.com/ios-filled/28/12B886/instagram-new--v1.png" />
              </button>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100008064076579"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="rounded-full bg-transparent p-2 mt-1 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent"
              >
                {" "}
                <img src="https://img.icons8.com/ios-filled/28/12B886/facebook-new.png" />
              </button>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/sohag02/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="rounded-full bg-transparent p-2 mt-1 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent"
              >
                <img src="https://img.icons8.com/ios-filled/28/12B886/linkedin-circled--v1.png" />
              </button>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/sohag-chowwdhury"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="rounded-full bg-transparent p-2 mt-1 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent"
              >
                <img src="https://img.icons8.com/material-outlined/30/12B886/github.png" />
              </button>
            </a>
          </div>
          <div
            style={{ height: "6em" }}
            className="border-l-2 mt-1 ml-5 border-green-300"
          ></div>
        </div>
      </div>
    );
  }
  
  export default LeftHand;
  