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
      background: 
      linear-gradient(
        270deg, #FF0000 
        4.39%, #FF0080 
        11.27%, #FF00FF 
        19.04%, #8000FF 
        26.31%, #0000FF 
        33.83%, #0080FF 
        42.11%, #00FFFF 
        49.38%, #00FF80 
        57.02%, #00FF00 
        65.31%, #80FF00 
        72.95%, #FFFF00 
        80.47%, #FF8000 
        89.14%, #FF0000 
        96.65%);
    border-radius: 25px;
    border: 2px solid #F6F6F6;
  }
    &::-webkit-slider-thumb,
     -moz-range-thumb {
       margin-top: -2px;
      height: 20px;
      width: 20px;
      background-color: transparent;
      border-radius: 50px;
      border: 3.5px solid #f6f6f6;
      cursor: pointer;
      z-index: 1;
      -webkit-appearance: none;
      &:hover {
        height: 30px;
        width: 30px;
        border-radius: 50px;
        border: 6px double  #f6f6f6;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -5.5px;
        box-shadow: 5px 5px 5px rgba(0,0,0,.5);
      &:active {
        height: 30px;
        width: 30px;
        border: 4px solid  #f6f6f6;
        box-shadow: 6px 6px 6px rgba(0,0,0,.5);
        }
      }
    }
`;

