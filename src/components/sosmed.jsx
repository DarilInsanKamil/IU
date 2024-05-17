import { Link } from "react-router-dom";

const Sosmed = ({ isOpen }) => {
  return (
    <section className="flex gap-8">
      <Link to="https://www.instagram.com/dlwlrma/" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          className={`${
            isOpen ? "text-black" : "text-white"
          }  hover:scale-105 transition-all duration-300`}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <Link to="https://twitter.com/_IUofficial" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          className={`${
            isOpen ? "text-black" : "text-white"
          }  hover:scale-105 transition-all duration-300`}
        >
          <path
            fill="currentColor"
            d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11l.751 1.107l6.273 9.242h-2.574z"
          />
        </svg>
      </Link>
      <Link to="https://www.facebook.com/iu.loen" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          className={`${
            isOpen ? "text-black" : "text-white"
          }  hover:scale-105 transition-all duration-300`}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
          />
        </svg>
      </Link>
      <Link to="https://www.youtube.com/@dlwlrma" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 1536 1792"
          className={`${
            isOpen ? "text-black" : "text-white"
          }  hover:scale-105 transition-all duration-300`}
        >
          <path
            fill="currentColor"
            d="M971 1244v211q0 67-39 67q-23 0-45-22v-301q22-22 45-22q39 0 39 67m338 1v46h-90v-46q0-68 45-68t45 68m-966-218h107v-94H138v94h105v569h100zm288 569h89v-494h-89v378q-30 42-57 42q-18 0-21-21q-1-3-1-35v-364h-89v391q0 49 8 73q12 37 58 37q48 0 102-61zm429-148v-197q0-73-9-99q-17-56-71-56q-50 0-93 54V933h-89v663h89v-48q45 55 93 55q54 0 71-55q9-27 9-100m338-10v-13h-91q0 51-2 61q-7 36-40 36q-46 0-46-69v-87h179v-103q0-79-27-116q-39-51-106-51q-68 0-107 51q-28 37-28 116v173q0 79 29 116q39 51 108 51q72 0 108-53q18-27 21-54q2-9 2-58M790 525V315q0-69-43-69t-43 69v210q0 70 43 70t43-70m719 751q0 234-26 350q-14 59-58 99t-102 46q-184 21-555 21t-555-21q-58-6-102.5-46T53 1626q-26-112-26-350q0-234 26-350q14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26 350M511 0h102L492 399v271H392V399q-14-74-61-212Q294 84 266 0h106l71 263zm370 333v175q0 81-28 118q-38 51-106 51q-67 0-105-51q-28-38-28-118V333q0-80 28-117q38-51 105-51q68 0 106 51q28 37 28 117m335-162v499h-91v-55q-53 62-103 62q-46 0-59-37q-8-24-8-75V171h91v367q0 33 1 35q3 22 21 22q27 0 57-43V171z"
          />
        </svg>
      </Link>
      <Link to="" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 256 256"
          className={`${
            isOpen ? "text-black" : "text-white"
          }  hover:scale-105 transition-all duration-300`}
        >
          <path
            fill="currentColor"
            d="M224 74a50.06 50.06 0 0 1-50-50a6 6 0 0 0-6-6h-40a6 6 0 0 0-6 6v132a22 22 0 1 1-31.43-19.89a6 6 0 0 0 3.43-5.42V88a6 6 0 0 0-7-5.91C52.2 88.28 26 120.05 26 156a74 74 0 0 0 148 0v-43.07A101.28 101.28 0 0 0 224 126a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6m-6 39.8a89.13 89.13 0 0 1-46.5-16.69A6 6 0 0 0 162 102v54a62 62 0 0 1-124 0c0-27.72 18.47-52.48 44-60.38v31.53A34 34 0 1 0 134 156V30h28.29A62.09 62.09 0 0 0 218 85.71Z"
          />
        </svg>
      </Link>
    </section>
  );
};
export default Sosmed;
