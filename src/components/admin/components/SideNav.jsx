import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/sidenav.scss";

function SideNav() {
  const [color, setColor] = useState("#26b33e");
  const click = (index) => {
    document.querySelectorAll(".item a").forEach((item, i) => {
      if (i == index) {
        if (!item.classList.contains("active")) {
          item.classList.add("active");
        }
      } else {
        item.classList.remove("active");
      }
    });
  };
  return (
    <div className="sidenav">
      <div className="item" onClick={() => click(0)}>
        <Link to={""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill={color}
              d="M22 21.586l-2.832-2.832c.523-.79.832-1.735.832-2.754 0-2.761-2.238-5-5-5s-5 2.239-5 5 2.238 5 5 5c1.019 0 1.964-.308 2.754-.832l2.832 2.832 1.414-1.414zm-7-2.586c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-11.964-4.374c-.362.087-.72-.15-.78-.511-.056-.337.16-.661.495-.741 3.522-.849 6.195-2.776 7.253-5.273.139-.327.518-.48.848-.343s.484.514.346.841c-1.378 3.253-4.692 5.193-8.162 6.027zm6.381 5.582c.116.153.156.35.11.536s-.173.341-.347.423c-.62.292-1.433.638-2.529 1.014-.446.153-.897-.287-.79-.762.051-.22.211-.398.426-.472 1.014-.351 1.766-.671 2.343-.943.272-.127.597-.048.777.192l.01.012zm-1.1-2.136c.098.313-.059.648-.361.775-.799.335-1.79.697-3.047 1.066-.295.087-.593-.056-.717-.285-.215-.365-.028-.835.382-.956 1.193-.352 2.131-.694 2.885-1.011.165-.069.352-.066.515.01.162.075.285.216.339.387l.004.014zm5.097 5.325c-.021.391-.378.603-.698.603-.089 0-.175-.016-.249-.049-1.918-.845-1.327-.797-3.027-.005-.08.036-.169.054-.26.054-.325 0-.677-.223-.693-.61-.012-.249.129-.48.357-.586 2.373-1.1 1.705-1.099 4.2-.003.236.103.384.34.37.596zm-11.414-12.115c-.005-.297.192-.561.48-.643 2.309-.655 4.007-1.883 4.654-3.411.309-.731.805-1.328 1.432-1.726.574-.363 1.246-.555 1.944-.555 1.236 0 2.405.599 3.051 1.563.422.63.578 1.353.49 2.102-.032.271-.233.491-.5.547l-.046.009c-.2.043-.409-.013-.562-.151-.151-.138-.228-.341-.203-.545.183-1.525-1.184-2.241-2.23-2.241-.86 0-1.738.444-2.182 1.494-.801 1.89-2.814 3.388-5.516 4.153-.402.115-.805-.181-.812-.596zm6.035 4.101c-.019.218-.148.411-.343.51-1.213.624-2.547 1.126-3.96 1.482-.32.081-.648-.095-.756-.405-.059-.173-.043-.363.045-.523s.238-.278.417-.323c1.292-.327 2.53-.794 3.673-1.39.206-.107.454-.094.647.035.192.129.3.354.279.585l-.002.029zm-5.045-6.269c-.445.145-.89-.221-.831-.681.037-.278.213-.466.435-.54 1.404-.459 1.82-1.165 2.312-2.005.314-.534.669-1.139 1.287-1.709 1.406-1.294 3.31-1.919 5.224-1.715 1.827.195 3.444 1.119 4.438 2.536.84 1.197 1.043 2.388 1.01 3.49-.006.183-.09.355-.231.471-.141.117-.326.167-.507.137l-.024-.004c-.315-.051-.543-.327-.533-.646.026-.896-.137-1.804-.776-2.715-.779-1.111-2.061-1.837-3.514-1.993-1.544-.164-3.075.339-4.205 1.38-.478.44-.756.913-1.05 1.414-.569.97-1.154 1.967-3.035 2.58zm-.011-4.959c.256-.586.518-.931.945-1.409 1.693-1.864 4.087-2.746 6.553-2.746 3.708 0 7.324 1.979 8.455 5.102.614 1.7.577 3.15.421 4.327-.027.208-.157.39-.346.484s-.411.089-.595-.014l-.021-.012c-.228-.127-.355-.379-.321-.638.138-1.049.162-2.277-.356-3.713-.781-2.159-3.151-3.796-6.037-4.173-3.038-.396-5.775.692-7.323 2.908l-.388.572c-.183.275-.534.347-.809.16-.28-.19-.345-.466-.178-.848z"
            />
          </svg>
          <span>admin</span>{" "}
        </Link>
      </div>
      <div className="item" onClick={() => click(1)}>
        <Link to={"blog"}>
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={color}
              d="m17 17.75c0-.414-.336-.75-.75-.75h-13.5c-.414 0-.75.336-.75.75s.336.75.75.75h13.5c.414 0 .75-.336.75-.75zm5-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-9-4c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm7-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
              fillRule="nonzero"
            />
          </svg>
          <span>Blog</span>
        </Link>
      </div>
      <div className="item" onClick={() => click(2)}>
        <Link to={"shop"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              fill={color}
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            />
          </svg>
          <span>shop</span>{" "}
        </Link>
      </div>
      <div className="item" onClick={() => click(3)}>
        <Link to={"ani"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill={color}
              d="M128 32V64H80c-26.5 0-48 21.5-48 48v48H480V112c0-26.5-21.5-48-48-48H384V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H192V32c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 192H32V464c0 26.5 21.5 48 48 48H432c26.5 0 48-21.5 48-48V192zM256 248c13.3 0 24 10.7 24 24v56h56c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V376H176c-13.3 0-24-10.7-24-24s10.7-24 24-24h56V272c0-13.3 10.7-24 24-24z"
            />
          </svg>
          <span>ani</span>
        </Link>
      </div>
      <div className="item" onClick={() => click(4)}>
        <Link to={"apps"}>
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={color}
              d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm6.75 9.25v3.25c0 .53-.47 1-1 1h-3.25c-.53 0-1-.47-1-1v-3.25c0-.53.47-1 1-1h3.25c.53 0 1 .47 1 1zm-3.75.5v2.25h2.25v-2.25zm3.75-7.25v3.25c0 .53-.47 1-1 1h-3.25c-.53 0-1-.47-1-1v-3.25c0-.53.47-1 1-1h3.25c.53 0 1 .47 1 1zm6.75 0v3.25c0 .53-.47 1-1 1h-3.25c-.53 0-1-.47-1-1v-3.25c0-.53.47-1 1-1h3.25c.53 0 1 .47 1 1zm-10.5.5v2.25h2.25v-2.25zm6.75 0v2.25h2.25v-2.25z"
              fillRule="nonzero"
            />
          </svg>
          <span>apps</span>
        </Link>
      </div>
      <div className="item" onClick={() => click(5)}>
        <Link to={"team"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              fill={color}
              d="M0 24C0 10.7 10.7 0 24 0H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 48 0 37.3 0 24zM0 488c0-13.3 10.7-24 24-24H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM83.2 160a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM32 320c0-35.3 28.7-64 64-64h96c12.2 0 23.7 3.4 33.4 9.4c-37.2 15.1-65.6 47.2-75.8 86.6H64c-17.7 0-32-14.3-32-32zm461.6 32c-10.3-40.1-39.6-72.6-77.7-87.4c9.4-5.5 20.4-8.6 32.1-8.6h96c35.3 0 64 28.7 64 64c0 17.7-14.3 32-32 32H493.6zM391.2 290.4c32.1 7.4 58.1 30.9 68.9 61.6c3.5 10 5.5 20.8 5.5 32c0 17.7-14.3 32-32 32h-224c-17.7 0-32-14.3-32-32c0-11.2 1.9-22 5.5-32c10.5-29.7 35.3-52.8 66.1-60.9c7.8-2.1 16-3.1 24.5-3.1h96c7.4 0 14.7 .8 21.6 2.4zm44-130.4a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM321.6 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
            />
          </svg>
          <span>team</span>
        </Link>
      </div>
      <div className="item" onClick={() => click(6)}>
        <Link to={"premii"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill={color}
              d="M13.387 17.375c-.679.385-2.076.385-2.756 0-.097 1.239-1.419 2.625-3.631 2.625v4h10v-4c-2.275 0-3.516-1.386-3.613-2.625zm2.613 5.625h-8v-2h8v2zm8-19.993c-.377 4.162-2.872 8.083-7.039 9.392.334-.551.665-1.157.984-1.816 2.959-1.515 4.097-4.265 4.527-6.279h-2.78c.058-.551.103-.779.103-1.297h4.205zm-16.961 9.392c-4.167-1.309-6.662-5.23-7.039-9.392h4.205c0 .518.045.746.103 1.297h-2.78c.431 2.015 1.568 4.764 4.527 6.279.319.659.65 1.265.984 1.816zm6.375 3.677c.612-2.957 4.965-5.038 5.39-12.958.138-2.574-4.129-3.118-6.795-3.118-2.754 0-6.915.423-6.825 2.8.309 8.18 4.8 10.279 5.421 13.276.639.534 2.168.534 2.809 0zm-6.891-13.373c0-.839 2.628-1.456 5.485-1.456 2.716 0 5.492.667 5.492 1.542 0 .9-2.911 1.307-5.492 1.307-2.458.001-5.485-.372-5.485-1.393zm2.233 2.421c.308 2.767 1.083 5.562 2.491 7.995-1.915-2.211-3.454-4.886-4.075-8.304.506.132 1.035.236 1.584.309z"
            />
          </svg>

          <span>Premii</span>
        </Link>
      </div>
      <div className="item" onClick={() => click(7)}>
        <Link to={"sponsors"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill={color}
              d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2l0 .1v0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1 84.8 216.3c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96 0c8.8 0 16.8 3.6 22.6 9.3l.1 .1zM0 304c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zM48 416v48H96c0-26.5-21.5-48-48-48zM96 304H48v48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48h48V416zM416 304c0 26.5 21.5 48 48 48V304H416zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
            />
          </svg>
          <span>Sponsors</span>
        </Link>
      </div>{" "}
      <div className="item" onClick={() => click(8)}>
        <Link to={"users"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill={color}
              d="M8.602 3.7c-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 3.321 0 5.97 2.117 5.97 6.167 0 3.555-1.949 6.833-2.383 7.833h-2.115c.392-1.536 2.499-4.366 2.499-7.842 0-5.153-5.867-4.985-7.369-2.458zm15.398 15.8c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"
            />
          </svg>
          <span>Users</span>
        </Link>
      </div>
      <div className="item" onClick={() => click(9)}>
        <Link to={"tasks"}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path
              fill={color}
              d="M20 24h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3v9h-2v-7h-4l-2 2h-3.898l-2.102-2h-4v18h16v-5h2v7zm-10-4h-6v-1h6v1zm0-2h-6v-1h6v1zm6-5h8v2h-8v3l-5-4 5-4v3zm-6 3h-6v-1h6v1zm0-2h-6v-1h6v1zm0-2h-6v-1h6v1zm0-2h-6v-1h6v1zm-1-7c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1z"
            />
          </svg>
          <span>Tasks</span>
        </Link>
      </div>
      <div className="item" onClick={() => click(10)}>
        <Link to={"meet/create"}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path
              fill={color}
              d="M3.848 19h-.848c-.796 0-1.559-.316-2.121-.879-.563-.562-.879-1.325-.879-2.121v-3c0-7.175 5.377-13 12-13s12 5.825 12 13v3c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879h-.848c-2.69 4.633-6.904 5-8.152 5-1.248 0-5.462-.367-8.152-5zm16.152-5.876c-.601.236-1.269-.18-1.269-.797 0-.304-.022-.61-.053-.915-1.761-.254-3.618-1.926-3.699-3.723-1.315 2.005-4.525 4.17-7.044 4.17 1.086-.699 1.839-2.773 1.903-3.508-.581 1.092-2.898 3.136-4.551 3.487l-.018.489c0 .619-.669 1.032-1.269.797v3.771c.287.256.632.464 1.041.594.225.072.412.224.521.424 2.206 4.046 5.426 4.087 6.438 4.087.929 0 3.719-.035 5.877-3.169-1.071.433-2.265.604-3.759.653-.37.6-1.18 1.016-2.118 1.016-1.288 0-2.333-.784-2.333-1.75s1.045-1.75 2.333-1.75c.933 0 1.738.411 2.112 1.005 1.9-.026 4.336-.334 5.888-2.645v-2.236zm-11-.624c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm6 0c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm5.478-1.5h1.357c-.856-5.118-4.937-9-9.835-9-4.898 0-8.979 3.882-9.835 9h1.357c.52-4.023 3.411-7.722 8.478-7.722s7.958 3.699 8.478 7.722z"
            />
          </svg>
          <span>Sedinte</span>
        </Link>
      </div>
    </div>
  );
}

export default SideNav;
