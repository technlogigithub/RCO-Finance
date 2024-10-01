import { FC } from "react";

interface IconProps{
  className?:string
}
const IconLogo:FC<IconProps> = ({ className, ...props }) => {
    return (
        <svg width="174" height="30" viewBox="0 0 174 30" fill="none" xmlns="http://www.w3.org/2000/svg"  className={className}
        {...props}>
        <path d="M12.332 9.57471L6.80422 0.000238406L17.8599 0.000239372L12.332 9.57471Z" fill="#E0FBFF"/>
        <path d="M23.387 9.57471L17.8592 0.000238406L28.9148 0.000239372L23.387 9.57471Z" fill="#C6E6FF"/>
        <path d="M17.8599 0L23.3877 9.57447L12.332 9.57447L17.8599 0Z" fill="#D0EFFF"/>
        <path d="M28.9138 0L34.4416 9.57447L23.386 9.57447L28.9138 0Z" fill="#B3D6FF"/>
        <path d="M28.9138 19.1489L23.386 9.57446L34.4417 9.57446L28.9138 19.1489Z" fill="#9BBFFF"/>
        <path d="M16.583 20.4253L11.0552 10.8508L22.1108 10.8508L16.583 20.4253Z" fill="#B6D7FF"/>
        <path d="M22.1108 10.8511L27.6386 20.4255H16.583L22.1108 10.8511Z" fill="#9EC1FF"/>
        <path d="M11.0554 10.8511L16.5832 20.4255H5.52759L11.0554 10.8511Z" fill="#C6E6FF"/>
        <path d="M11.0554 30L5.52761 20.4255L16.5833 20.4255L11.0554 30Z" fill="#CFF0FF"/>
        <path d="M5.52782 20.4253L11.0556 29.9998H0L5.52782 20.4253Z" fill="#DEFCFF"/>
        <path d="M22.1109 30L16.583 20.4255L27.6387 20.4255L22.1109 30Z" fill="#B5D5FF"/>
        <path d="M27.6384 20.4253L33.1662 29.9998H22.1106L27.6384 20.4253Z" fill="#C5E4FF"/>
        <path d="M108.731 7.55518H106.805C106.521 7.55518 106.292 7.78492 106.292 8.06833V9.58412C106.292 9.86753 106.521 10.0973 106.805 10.0973H108.731C109.015 10.0973 109.244 9.86753 109.244 9.58412V8.06833C109.244 7.78492 109.015 7.55518 108.731 7.55518Z" fill="#FEFEFE"/>
        <path d="M62.247 15.3395C62.2943 17.2184 63.0654 18.4974 64.5601 19.1763C66.8075 20.1974 68.6154 19.4921 69.9838 17.0605C70.1206 16.8237 70.3233 16.7052 70.5917 16.7052H72.6443C72.9864 16.7052 73.1048 16.8658 72.9996 17.1868C72.268 19.4816 71.0996 20.9631 69.4943 21.6316C66.4312 22.9105 63.8101 22.5974 61.6312 20.6921C60.047 19.3026 59.2312 17.5447 59.1838 15.4184C59.1312 13.2868 59.8627 11.4921 61.3785 10.0342C63.4627 8.02367 66.0654 7.58419 69.1864 8.71577C70.818 9.30525 72.0549 10.7263 72.897 12.9789C73.018 13.2947 72.9075 13.4631 72.5654 13.4842L70.5127 13.5789C70.2496 13.5947 70.0417 13.4868 69.8891 13.2552C68.4049 10.8921 66.568 10.2737 64.3785 11.4C62.9154 12.1526 62.2049 13.4658 62.247 15.3395Z" fill="#FEFEFE"/>
        <path d="M89.0887 15.1883C89.097 16.1327 88.9142 17.0696 88.5509 17.9454C88.1876 18.8212 87.6508 19.6187 86.9712 20.2926C86.2916 20.9664 85.4825 21.5032 84.5901 21.8725C83.6978 22.2417 82.7395 22.4361 81.7702 22.4446C79.8126 22.4616 77.9285 21.7203 76.5325 20.3837C75.1365 19.047 74.3428 17.2245 74.3262 15.3171C74.3179 14.3727 74.5007 13.4358 74.864 12.56C75.2274 11.6842 75.7641 10.8867 76.4437 10.2129C77.1233 9.53904 77.9324 9.00219 78.8248 8.63295C79.7172 8.2637 80.6754 8.0693 81.6447 8.06084C83.6023 8.04376 85.4864 8.78509 86.8824 10.1217C88.2785 11.4584 89.0721 13.2809 89.0887 15.1883ZM86.0653 15.2448C86.0653 14.0911 85.607 12.9847 84.7913 12.1689C83.9755 11.3531 82.869 10.8948 81.7153 10.8948C80.5617 10.8948 79.4552 11.3531 78.6394 12.1689C77.8237 12.9847 77.3653 14.0911 77.3653 15.2448C77.3653 16.3985 77.8237 17.5049 78.6394 18.3207C79.4552 19.1365 80.5617 19.5948 81.7153 19.5948C82.869 19.5948 83.9755 19.1365 84.7913 18.3207C85.607 17.5049 86.0653 16.3985 86.0653 15.2448Z" fill="#FEFEFE"/>
        <path d="M50.0811 17.8181V21.6865C50.0811 21.8163 50.0296 21.9408 49.9378 22.0326C49.846 22.1244 49.7215 22.176 49.5917 22.176H47.5232C47.4039 22.176 47.2894 22.1294 47.205 22.0465C47.1207 21.9636 47.0732 21.8512 47.0732 21.7339V8.676C47.0732 8.48653 47.168 8.39179 47.3575 8.39179C49.9417 8.376 52.0206 8.39706 53.5943 8.45495C54.6522 8.49706 55.6127 9.06285 56.4759 10.1523C57.9548 12.0155 57.939 13.9076 56.4285 15.8286C56.1601 16.1602 55.5838 16.3892 55.2917 16.7681C55.1443 16.9628 55.1311 17.1655 55.2522 17.376L57.8101 21.8128C57.8312 21.8491 57.8427 21.8904 57.8433 21.9324C57.8439 21.9744 57.8337 22.0157 57.8135 22.0518C57.7934 22.088 57.7642 22.1179 57.7289 22.1383C57.6936 22.1588 57.6535 22.169 57.6127 22.1681H55.1653C54.8706 22.1681 54.6496 22.0392 54.5022 21.7813L52.2206 17.826C52.0785 17.5839 51.868 17.4628 51.589 17.4628H50.4364C50.1996 17.4628 50.0811 17.5813 50.0811 17.8181ZM50.089 11.3839V14.3839C50.089 14.453 50.1165 14.5193 50.1653 14.5681C50.2142 14.617 50.2805 14.6444 50.3496 14.6444H52.568C52.8169 14.6446 53.0634 14.6036 53.2933 14.5239C53.5233 14.4442 53.7322 14.3274 53.9082 14.18C54.0841 14.0326 54.2237 13.8577 54.3188 13.6651C54.414 13.4725 54.4629 13.2661 54.4627 13.0576V12.7102C54.4624 12.2895 54.2626 11.8861 53.9073 11.5885C53.552 11.2909 53.0703 11.1236 52.568 11.1234H50.3496C50.2805 11.1234 50.2142 11.1508 50.1653 11.1997C50.1165 11.2485 50.089 11.3148 50.089 11.3839Z" fill="#FEFEFE"/>
        <path d="M103.797 14.5027V16.508C103.797 16.598 103.761 16.6843 103.698 16.748C103.634 16.8117 103.548 16.8474 103.458 16.8474H99.3918C99.3018 16.8474 99.2154 16.8832 99.1518 16.9469C99.0881 17.0105 99.0523 17.0969 99.0523 17.1869V21.829C99.0523 21.919 99.0166 22.0054 98.9529 22.0691C98.8892 22.1327 98.8029 22.1685 98.7129 22.1685H96.3839C96.2939 22.1685 96.2075 22.1327 96.1439 22.0691C96.0802 22.0054 96.0444 21.919 96.0444 21.829V8.77111C96.0444 8.68108 96.0802 8.59473 96.1439 8.53107C96.2075 8.46741 96.2939 8.43164 96.3839 8.43164H104.002C104.092 8.43164 104.179 8.46741 104.242 8.53107C104.306 8.59473 104.342 8.68108 104.342 8.77111V10.8001C104.342 10.8446 104.333 10.8888 104.316 10.93C104.299 10.9712 104.274 11.0086 104.242 11.0401C104.211 11.0716 104.173 11.0966 104.132 11.1137C104.091 11.1308 104.047 11.1395 104.002 11.1395H99.3918C99.3018 11.1395 99.2154 11.1753 99.1518 11.239C99.0881 11.3026 99.0523 11.389 99.0523 11.479V13.8237C99.0523 13.9138 99.0881 14.0001 99.1518 14.0638C99.2154 14.1275 99.3018 14.1632 99.3918 14.1632H103.458C103.548 14.1632 103.634 14.199 103.698 14.2626C103.761 14.3263 103.797 14.4127 103.797 14.5027Z" fill="#FEFEFE"/>
        <path d="M114.873 12.4579C114.979 12.4 115.2 12.2474 115.537 12C117.431 10.5948 120.115 11.2737 121.181 12.8606C121.744 13.6921 122.013 15.1342 121.987 17.1869C121.96 19.3185 121.95 20.8106 121.955 21.6632C121.955 21.7951 121.903 21.9216 121.809 22.0149C121.716 22.1082 121.589 22.1606 121.458 22.1606H119.515C119.242 22.1606 119.102 22.0237 119.097 21.75L119.05 15.7895C119.039 14.4263 118.363 13.7895 117.021 13.879C116.984 13.879 116.958 13.8816 116.942 13.8869C115.605 13.9921 114.929 14.7 114.913 16.0106L114.834 21.7579C114.829 22.0211 114.694 22.1527 114.431 22.1527H112.402C112.123 22.1527 111.984 22.0158 111.984 21.7421V12.0474C111.984 11.8 112.105 11.6474 112.347 11.5895C113.342 11.3474 113.989 11.5711 114.289 12.2606C114.41 12.5395 114.605 12.6053 114.873 12.4579Z" fill="#FEFEFE"/>
        <path d="M135.447 16.8316C135.436 19.9631 135.431 21.5868 135.431 21.7026C135.426 21.9552 135.297 22.1026 135.044 22.1447C134.223 22.2816 133.565 22.1316 133.071 21.6947C132.86 21.5105 132.628 21.4789 132.376 21.6C128.918 23.2316 126.228 22.4237 124.307 19.1763C124.007 18.6658 123.857 17.8737 123.857 16.8C123.863 15.721 124.018 14.9289 124.323 14.4237C126.26 11.1868 128.952 10.3947 132.4 12.0474C132.652 12.1684 132.886 12.1368 133.102 11.9526C133.597 11.521 134.255 11.3763 135.076 11.5184C135.328 11.5605 135.455 11.7079 135.455 11.9605C135.46 12.0763 135.457 13.7 135.447 16.8316ZM132.589 16.8C132.589 16.0295 132.283 15.2905 131.738 14.7457C131.193 14.2008 130.454 13.8947 129.684 13.8947C128.913 13.8947 128.174 14.2008 127.629 14.7457C127.085 15.2905 126.778 16.0295 126.778 16.8C126.778 17.5705 127.085 18.3095 127.629 18.8543C128.174 19.3992 128.913 19.7052 129.684 19.7052C130.454 19.7052 131.193 19.3992 131.738 18.8543C132.283 18.3095 132.589 17.5705 132.589 16.8Z" fill="#FEFEFE"/>
        <path d="M140.468 12.2606C140.589 12.5396 140.784 12.6053 141.052 12.458C141.157 12.4001 141.378 12.2474 141.715 12.0001C143.618 10.5869 146.31 11.2738 147.376 12.8606C147.944 13.6974 148.215 15.1448 148.189 17.2027C148.157 19.3396 148.144 20.8369 148.15 21.6948C148.15 21.8267 148.097 21.9532 148.004 22.0465C147.911 22.1398 147.784 22.1922 147.652 22.1922H145.702C145.428 22.1922 145.289 22.0527 145.284 21.7738L145.244 15.7974C145.234 14.4343 144.555 13.7974 143.207 13.8869C143.171 13.8869 143.144 13.8896 143.128 13.8948C141.786 14.0001 141.107 14.708 141.092 16.0185L141.013 21.7817C141.007 22.0448 140.873 22.1764 140.61 22.1764H138.573C138.294 22.1764 138.155 22.0396 138.155 21.7659V12.0474C138.155 11.8001 138.276 11.6474 138.518 11.5896C139.518 11.3474 140.168 11.5711 140.468 12.2606Z" fill="#FEFEFE"/>
        <path d="M152.973 16.8395C153.005 19.8079 156.478 20.7395 158.136 18.2684C158.284 18.0526 158.489 17.9447 158.752 17.9447H160.718C161.092 17.9447 161.213 18.121 161.081 18.4737C160.186 20.8842 158.586 22.1789 156.281 22.3579C152.918 22.6105 150.139 20.3684 150.1 16.871C150.06 13.3737 152.792 11.0684 156.155 11.2421C158.465 11.3684 160.094 12.6263 161.042 15.0158C161.184 15.3684 161.068 15.5474 160.694 15.5526L158.728 15.6C158.465 15.6053 158.257 15.5026 158.105 15.2921C156.392 12.8605 152.942 13.871 152.973 16.8395Z" fill="#FEFEFE"/>
        <path d="M173.128 14.9369V17.6053L165.739 17.6684C165.428 17.6737 165.326 17.8211 165.431 18.1105C165.863 19.2842 166.668 19.8869 167.847 19.9184C168.326 19.929 169.052 19.6263 170.026 19.0105C170.726 18.5632 171.605 18.4632 172.663 18.7105C172.947 18.7737 173.034 18.9395 172.923 19.2079C172.35 20.6184 171.247 21.5895 169.615 22.1211C165.842 23.3527 162.328 20.6369 162.399 16.5711C162.51 10.3816 170.997 9.21318 173.128 14.9369ZM165.636 15.6237L170.231 15.6395C170.262 15.6395 170.293 15.627 170.315 15.6048C170.337 15.5826 170.349 15.5525 170.349 15.5211V15.4579C170.351 15.2324 170.291 15.009 170.175 14.8003C170.059 14.5917 169.888 14.402 169.673 14.2421C169.457 14.0822 169.201 13.9552 168.919 13.8686C168.636 13.7819 168.334 13.7371 168.028 13.7369H167.839C167.225 13.7364 166.636 13.9156 166.201 14.2352C165.766 14.5548 165.52 14.9888 165.518 15.4421V15.5053C165.518 15.5367 165.53 15.5668 165.553 15.589C165.575 15.6112 165.605 15.6237 165.636 15.6237Z" fill="#FEFEFE"/>
        <path d="M108.788 11.5438L106.783 11.5403C106.543 11.5399 106.348 11.734 106.348 11.9738L106.331 21.7001C106.33 21.9399 106.524 22.1346 106.764 22.135L108.769 22.1385C109.009 22.1389 109.204 21.9449 109.204 21.7051L109.221 11.9788C109.222 11.739 109.028 11.5442 108.788 11.5438Z" fill="#FEFEFE"/>
        </svg>
        
    );
  };

  const IconWallet:FC<IconProps> = ({ className, ...props }) => {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}
      {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.54531 3.37868C1.66663 4.25736 1.66663 5.67157 1.66663 8.5V11.5C1.66663 14.3284 1.66663 15.7426 2.54531 16.6213C3.42399 17.5 4.8382 17.5 7.66663 17.5H15C15.3095 17.5 15.4643 17.5 15.5948 17.4886C17.0451 17.3617 18.195 16.2118 18.3219 14.7615C18.3333 14.631 18.3333 14.4762 18.3333 14.1667H13.3333C11.9526 14.1667 10.8333 13.0474 10.8333 11.6667C10.8333 10.286 11.9526 9.16667 13.3333 9.16667H18.3333V8.5C18.3333 5.67157 18.3333 4.25736 17.4546 3.37868C16.5759 2.5 15.1617 2.5 12.3333 2.5H7.66663C4.8382 2.5 3.42399 2.5 2.54531 3.37868ZM5.83329 5.66667C5.28101 5.66667 4.83329 6.11438 4.83329 6.66667C4.83329 7.21895 5.28101 7.66667 5.83329 7.66667H8.33329C8.88558 7.66667 9.33329 7.21895 9.33329 6.66667C9.33329 6.11438 8.88558 5.66667 8.33329 5.66667H5.83329Z" fill="white"/>
      <path d="M14.1667 11.6665H13.3334" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    );
  };

  const IconLogout = () => {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.3332C14.6024 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6024 1.6665 10 1.6665C5.73608 1.6665 2.2201 4.86894 1.72607 8.99984H9.25248L6.79292 6.54028L8.20713 5.12606L12.3738 9.29273L13.0809 9.99984L12.3738 10.7069L8.20713 14.8736L6.79292 13.4594L9.25248 10.9998H1.72607C2.2201 15.1307 5.73608 18.3332 10 18.3332Z" fill="white"/>
      </svg>
    );
  };

  const IconRightArrow = () => {
    return (
      <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7.0752H15.85" stroke="#141239" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.7749 1L15.8499 7.075L9.7749 13.15" stroke="#141239" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    );
  };
  
  export {
    IconLogo,
    IconWallet,
    IconLogout,
    IconRightArrow
  };