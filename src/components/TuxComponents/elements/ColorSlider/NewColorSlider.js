import styled from "styled-components";

// var css = document.createElement('style');
// document.body.appendChild(css);

// function updateThumbColor(hue) {
//     var hslcolor = "hsl(" + hue + ", 100%, 50%)";
// 	css.textContent = ".rainbow::-webkit-slider-thumb { background: " + hslcolor + "; }";
//     var tc = new tinycolor(hslcolor);
//     ('#pick').text(tc.toHex());
// }
// updateThumbColor(180);

// ('.rainbow').on('input change', function() {
//     updateThumbColor(this.value);
// });

export const Slider = styled.input`
  -webkit-appearance: none;
  /* margin-top: 10px; */
  width: 713px;
  height: 30px;
  &::-webkit-slider-runnable-track {
    height: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    background: linear-gradient(
      to right,
      hsl(0, 100%, 50%) 0%,
      hsl(36, 100%, 50%) 10%,
      hsl(72, 100%, 50%) 20%,
      hsl(108, 100%, 50%) 30%,
      hsl(144, 100%, 50%) 40%,
      hsl(180, 100%, 50%) 50%,
      hsl(216, 100%, 50%) 60%,
      hsl(252, 100%, 50%) 70%,
      hsl(288, 100%, 50%) 80%,
      hsl(324, 100%, 50%) 90%,
      hsl(360, 100%, 50%) 100%
    );
    border-radius: 25px;
    border: 2px solid #F6F6F6;
  }
    &::-webkit-slider-thumb,
     -moz-range-thumb {
      height: 15px;
      width: 15px;
      margin-top: 0px;
      background-color: transparent;
      border-radius: 50px;
      border: 3.5px solid #f6f6f6;
      cursor: pointer;
      -webkit-appearance: none;
      &:hover {
        height: 25px;
        width: 25px;
        border-radius: 50px;
        border: 7px double  #f6f6f6;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -3px;
        box-shadow: 5px 5px 5px rgba(0,0,0,.5);
      &:active {
        height: 25px;
        width: 25px;
        border: 4px solid  #f6f6f6;
        box-shadow: 6px 6px 6px rgba(0,0,0,.5);
        }
      }
    }
`;

