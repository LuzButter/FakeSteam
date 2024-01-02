import React, { useState } from 'react';
import styled from 'styled-components';

const SocialMediaWrapper = styled.div`
  display: inline-block;
  padding: 1rem;
  & path {
    fill: ${props => (props.disabled ? '#dfdfdf' : (props.active ? '#DB7290' : '#FFD0DD'))};
    &:hover{
      fill: ${props => (props.disabled ? 'none' : '#f3a333')};
    }
    &:active{
      fill: ${props => (props.disabled ? 'none' : '#930077')};
    }
  } 
`

const Location = {
  "Yilan County": "宜蘭縣",
  "Changhua County": "彰化縣",
  "Nantou County": "南投縣",
  "Yunlin County": "雲林縣",
  "Keelung City": "基隆市",
  "Taipei City": "台北市",
  "Taichung City": "台中市",
  "Tainan City": "台南市",
  "Taoyuan City": "桃園市",
  "Miaoli County": "苗栗縣",
  "Chiayi City": "嘉義市",
  "Chiayi County": "嘉義縣",
  "Kaohsiung City": "高雄市",
  "Taitung County": "台東縣",
  "Hualien County": "花蓮縣",
  "Hsinchu City": "新竹市",
  "Hsinchu County": "新竹縣",
  "Pingtung County": "屏東縣",
}

const SVGMap = () => {
  // Define state to track the hover status
  const [hoveredArea, setHoveredArea] = useState(null)

  // Function to handle mouse over
  const handleMouseOver = (event) => {
    // Extract the data attribute from the hovered element
    const area = event.target.getAttribute('data-name')
    console.log(area)
    setHoveredArea(area);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredArea(null);
  };

  return (
    <div className='grid' style={{width: '400px', height: '300px',}}>
      <SocialMediaWrapper className='col' style={{ height: '100%', }} >
        <svg height='100%' baseProfile="tiny" viewBox="0 0 800 1374" stroke-linecap="round" stroke-linejoin="round">
          <g id="BenIsland">
            <path id='1' onMouseOver={handleMouseOver} data-name="Yilan County" d="M 782.51 128.34 766.2 134.2 762.45 140.93 751 147.7 749.99 154.23 739.95 164.08 736.27 165.83 727.91 181.83 725.36 190.53 723.5 200.87 722.82 210.98 724.02 223.26 730.2 239.17 730.96 253.42 732.3 260.14 736.58 271.52 742.23 278.81 748.17 280.57 749.83 282.97 743.72 292.46 745.28 309.17 743.21 311.98 732.46 314.97 731.78 323.93 735.92 325.28 736.02 329.23 716.31 349.61 711.99 360.14 710.33 374.55 704.91 386.15 703.82 390.64 705.1 397.62 699.07 398.05 693.28 394.57 681.02 393.01 664.75 386.28 647.4 375.33 643.67 376.92 643.69 380.73 649.08 384.28 648.21 389.68 634.69 390.32 633.53 392.44 637.75 398.69 618.82 394.65 617.21 391.22 603.53 386.43 593.84 387.96 588.74 384.28 580.47 381.38 575.24 377.7 569.51 370.36 557.46 372.51 554.51 371.69 546.66 376.82 543.62 376.3 540.11 367.87 536.26 366.22 529.46 367.47 524.03 360.67 525.26 349.79 521.07 346.73 522.36 343.58 525.91 338.05 528.46 336.3 532.36 329.46 535.58 328.91 537.28 328.49 542.44 324 545.15 319.2 546.17 319.22 548.42 317.41 550.25 314.3 551.07 313.38 551.21 313.33 554.93 311.35 552.96 307.08 554.06 298.47 554.81 297.61 559.17 293.66 558.1 290.62 558.08 290.57 556.98 289.03 556.8 288.79 555.5 286.16 559.42 281.34 565.48 280.36 568.32 272.95 574.99 262.23 573.6 260.59 578.26 253.32 586.53 253.04 591.66 253.3 599.52 248.75 604.19 249.23 609.46 247.13 612.09 240.18 625.76 236.49 629.95 234.29 633.05 226.72 631.08 218 633.94 213.24 631.67 207.21 643.16 205.17 647.04 198.56 654.06 196.57 659.19 197.69 662.65 195.34 670.94 195.18 670.76 191.6 680.99 185.32 688.4 179.66 692.17 181.01 699.83 179.3 703.13 175.59 709.48 171.68 708.17 166.12 712.54 161.84 728.39 159.87 736.58 152.27 734.36 146.59 731.63 144.83 734.58 137.51 740.25 136.17 744.41 137.36 754.76 134.8 757.02 131.85 762.44 129.8 769.39 129.23 773.6 126.39 781.21 126.46 782.51 128.34 Z" />
            <path id='2' onMouseOver={handleMouseOver} data-name="Changhua County" d="M 173.85 441.21 193.13 447.68 194.64 449.28 201.8 464.85 200.92 468.52 204.37 473.57 211.4 478.83 220.65 481.07 236.68 483.39 237.8 490.76 241.91 496.95 241.2 503.27 243.24 512.81 249.78 514.3 254.13 512.38 263.4 519.09 260.96 522.39 248.44 521.47 246.81 527.28 251.89 530.83 250.58 539.52 243.38 544.98 245.92 549.45 243.69 553.19 246.71 555.17 244.5 560.86 245.42 568.34 243.59 569.34 239.81 578.9 242.66 582.55 239.3 588.59 247.09 593.74 247.83 597.21 252.13 600.27 263.47 598.83 263.54 603 258.56 607.99 247.97 611.02 237.74 608.88 228.7 609 211.83 604.92 195.82 605.36 184.58 602.75 172 598.43 164.39 593.24 155.21 594.76 139.08 593.88 134.96 596.02 114 597.21 92.58 591.58 84.89 585.98 78.61 578.69 84.64 571.02 89.41 569.73 93.68 565.34 93.07 561.89 98.28 552.74 102.47 551 104.28 542.58 113.51 535.95 114.24 529.95 117.36 525.06 124.49 519.13 127.42 508.78 127.69 500.51 130.96 495.97 136.27 492.15 144.66 489.4 143.71 485.7 149.77 477.37 157.09 461.22 157.53 456.39 164.23 449.49 168.77 448.56 173.85 441.21 Z" />
            <path id='3' onMouseOver={handleMouseOver} data-name="Nantou County" d="M 531.29 434.61 533.98 444.01 524.34 445.65 516.23 452.15 509.16 453.11 509.03 461.36 506.44 469.96 512.28 471.35 520.35 477.81 525.44 478.62 521.66 486.29 523.28 490.5 507.18 502.87 508.19 508.73 501.62 522.19 497.87 527.85 499.78 534.69 505.04 538.53 502.69 549.66 504.48 555.74 503.83 562.04 500.35 562.15 501.23 571.63 494.95 578.2 493.35 584.38 489.66 588.85 487.56 600.49 484.76 601.93 485.06 611.36 475.77 617.04 478.94 622.49 486.74 625.32 485.25 627.86 490.23 642.09 489.48 651.07 486.79 655.28 487.91 661.28 483.41 670.26 483.6 675.23 478.92 686.01 476.14 687.74 471.43 685.83 461.29 691.46 454.83 691.37 454.24 696.56 457.64 699.02 452.52 705.02 453.82 707.91 452.24 715.4 447.65 720.22 441.55 717.9 430.12 720.38 420.61 718.92 418.01 726.6 414.27 728.96 412.63 733.34 408.71 736.68 416.77 741.73 413.98 746.12 406.5 748.37 399.14 752.41 397.27 747.94 399.37 745.88 396.39 741.65 392.86 741.62 379.56 737.78 375.85 738.66 371.82 739.62 359.71 736.17 347.47 736.2 344.92 739.41 337.97 737.06 328.05 737.97 323.25 733.07 321.68 721.95 315.81 711.77 315.9 707.87 320.67 701.11 320.23 696.18 321.89 691.22 317.94 685.66 313.76 687.37 304.1 685.4 297.93 681.11 293.36 680.06 284.46 681.68 281.62 677.21 274.04 679.08 268.6 677.82 265.4 681.66 256.37 681.82 252.41 679.51 253.31 674.45 249.89 673.55 245.97 678.03 243.41 671.86 245.79 665.25 250.55 656.8 250.48 649.05 247.92 641.77 247.71 634.98 249.68 630.94 253.65 629.67 254.26 624.04 251.25 616.2 247.97 611.02 258.56 607.99 263.54 603 263.47 598.83 252.13 600.27 247.83 597.21 247.09 593.74 239.3 588.59 242.66 582.55 239.81 578.9 243.59 569.34 245.42 568.34 244.5 560.86 246.71 555.17 243.69 553.19 245.92 549.45 243.38 544.98 250.58 539.52 251.89 530.83 246.81 527.28 248.44 521.47 260.96 522.39 263.4 519.09 274.59 522.66 279.77 520.86 284.81 521.12 290.58 525.33 300.46 521.09 311.23 508.24 315.15 498.85 318.38 496.59 324.15 495.92 323.84 486.65 326.96 477.59 330.42 474.54 335.4 477.45 341.6 477.7 345.19 484.22 349.25 484.95 350.61 477.77 360.68 481.43 365.51 479.5 372.86 473.19 377.34 476.3 382.99 477.59 388.72 476.78 392.43 473.58 399.24 461.85 412.17 460.23 414.19 462.35 429.81 451.07 435.6 445.23 447.53 445.63 452.59 438.93 457.96 437.92 460.6 433.87 465.86 439.15 472.3 434.77 476.89 435.37 481.57 432.32 488.93 436.16 491.43 435.04 495.83 426.68 500 425.69 504.97 431.25 511.18 432.35 515.43 430.49 523.8 430.8 531.29 434.61 Z" />
            <path id='4' onMouseOver={handleMouseOver} data-name="Yunlin County" d="M 247.97 611.02 251.25 616.2 254.26 624.04 253.65 629.67 249.68 630.94 247.71 634.98 247.92 641.77 250.48 649.05 250.55 656.8 245.79 665.25 243.41 671.86 245.97 678.03 249.89 673.55 253.31 674.45 252.41 679.51 256.37 681.82 265.4 681.66 268.6 677.82 274.04 679.08 281.62 677.21 284.46 681.68 281.93 684.57 285.68 692.2 285.01 695.3 279.25 698.53 269.6 695.52 262.43 697.85 260.23 694.72 252.18 697.16 250.09 688.65 241.86 689.81 235.64 693.05 227.19 691.89 222.3 692.67 214.18 688.93 206.26 688.17 198.46 681.58 191.16 671.9 182.79 672.83 173.42 675.35 167.63 675.57 159.92 678.27 152.11 675.18 145.65 677.57 142.89 682.04 137.54 682.89 133.58 688.45 124.29 689.35 124.07 694.43 114.97 700.38 106.39 701.7 107.05 705.74 101.19 708.84 99.39 713.97 95.98 712.85 93.02 707.78 87.35 710.76 89.21 720.79 86.16 723.26 79.69 724.62 72.42 721.6 62.73 722.39 56.92 719.42 48.56 717.97 50.35 713.49 46.03 706.29 47.54 697.28 45.05 677.83 39.56 677.23 35.91 672.79 39.74 668.62 44.28 658.97 45.89 652.08 48.37 648.97 48.99 643 52.58 637.88 56.61 628.82 57.97 621.96 53.05 611.67 62.91 601.19 67.05 598.04 73.49 590.39 72.5 585.89 76.17 584.95 78.61 578.69 84.89 585.98 92.58 591.58 114 597.21 134.96 596.02 139.08 593.88 155.21 594.76 164.39 593.24 172 598.43 184.58 602.75 195.82 605.36 211.83 604.92 228.7 609 237.74 608.88 247.97 611.02 Z" />
            <path id='5' onMouseOver={handleMouseOver} data-name="Keelung City" d="M 716.98 66.6 717.57 70.8 711.59 76.25 704.66 73.09 697.84 77.81 699.08 87.46 705.76 93.3 700.37 98.55 688.26 100.25 680.23 94.09 670.57 92.6 657.37 83.78 653.56 75.71 652.27 69.98 646.48 67.22 650.87 62.78 655.03 63.01 658.35 60.17 666.23 58.7 678.88 50.7 679 50.57 679.13 50.33 678.16 54.58 684.78 54.92 694.8 58.52 701.67 55.62 712.82 62.3 718.4 61.39 716.98 66.6 Z" />
            <path id='6' onMouseOver={handleMouseOver} data-name="Taipei City" d="M 623.22 42.02 628.46 45.4 625.67 54.18 630.83 55.51 633.21 63.63 636.56 66.61 633.14 75.85 641.15 79.65 646.45 86.65 644.72 89.09 643.65 97.19 641.55 102.11 643.77 105.37 655.17 110.38 643.99 114.51 638.44 113.26 633.92 115.56 633.16 118.64 634.99 130.82 642.66 133.38 633.74 137.45 626.3 135 619.28 135.75 615.99 129.28 609.45 126.07 608.25 120.07 602.38 113.64 598.27 112.92 591.63 117.68 588 107.29 590.08 104.36 595.14 102.99 597.1 99.9 597.43 93.34 595.66 88.07 590.2 82.47 581.04 80.53 577.39 78.34 580.73 68.48 589.13 60.73 595.7 51.85 602.68 53.22 603.34 49.34 611.86 45.33 616.77 37.48 619.9 37.13 623.22 42.02 Z" />
            <path id='7' onMouseOver={handleMouseOver} data-name="New Taipei City" d="M 679.13 50.33 679 50.57 678.88 50.7 666.23 58.7 658.35 60.17 655.03 63.01 650.87 62.78 646.48 67.22 652.27 69.98 653.56 75.71 657.37 83.78 670.57 92.6 680.23 94.09 688.26 100.25 700.37 98.55 705.76 93.3 699.08 87.46 697.84 77.81 704.66 73.09 711.59 76.25 717.57 70.8 716.98 66.6 724.38 66.67 723.58 71.43 732.44 69.56 741.79 71.87 746.78 71.1 754.7 73.26 757.71 71.39 764.44 72.6 766.59 77.91 761.7 85.33 762.08 90.04 768.67 96.07 767.56 104.99 774.88 113.03 785.58 110.81 795.85 113.61 799 117.15 789.71 125.33 782.51 128.34 781.21 126.46 773.6 126.39 769.39 129.23 762.44 129.8 757.02 131.85 754.76 134.8 744.41 137.36 740.25 136.17 734.58 137.51 731.63 144.83 734.36 146.59 736.58 152.27 728.39 159.87 712.54 161.84 708.17 166.12 709.48 171.68 703.13 175.59 699.83 179.3 692.17 181.01 688.4 179.66 680.99 185.32 670.76 191.6 670.94 195.18 662.65 195.34 659.19 197.69 654.06 196.57 647.04 198.56 643.16 205.17 631.67 207.21 633.94 213.24 631.08 218 633.05 226.72 629.95 234.29 625.76 236.49 612.09 240.18 609.46 247.13 604.19 249.23 599.52 248.75 591.66 253.3 586.53 253.04 584.2 244.06 574.57 240.24 568.53 229.23 563.72 217.05 574.24 207.84 569.7 204.05 568.96 197.25 566.36 196.15 560.58 187.86 555.36 184.6 548.24 185.71 545.36 188.26 537.25 186.23 535.58 178.62 532.46 174.69 530.93 164.83 522.52 161.87 524.51 158.14 521.04 155.25 523.31 149.23 525.7 137.42 524.91 130.56 531.17 128.66 541.68 130.87 547.06 128.01 547.84 123.29 551.96 124.14 555.58 121.79 553.28 114.98 559.16 113.92 553.57 109.36 551.31 104.03 553.24 100.75 548.69 96.02 544.87 94.87 536.08 95.25 533.68 88.77 523.91 84.18 515.1 82.5 513.26 79.39 506.97 77.14 507.25 74.02 514.2 71.03 522.07 71.76 535.5 68.46 550.14 61.95 550.93 53.78 555.2 57.5 561.87 49.99 556 47.69 556.23 44.98 561.83 44.29 561.91 41.17 566.72 34.47 568.75 33.98 575.52 19.58 583.13 18.3 586.91 12.3 598.37 7.23 605.05 6.19 608.21 1.74 618.91 3.79 625.94 1 633.72 3.95 638.11 8.03 644.24 11.08 648.68 16.67 648.58 24.49 657.44 35.51 664.13 40.01 672.28 37.44 669.54 44.11 672.28 48.89 679.13 50.33 Z M 623.22 42.02 619.9 37.13 616.77 37.48 611.86 45.33 603.34 49.34 602.68 53.22 595.7 51.85 589.13 60.73 580.73 68.48 577.39 78.34 581.04 80.53 590.2 82.47 595.66 88.07 597.43 93.34 597.1 99.9 595.14 102.99 590.08 104.36 588 107.29 591.63 117.68 598.27 112.92 602.38 113.64 608.25 120.07 609.45 126.07 615.99 129.28 619.28 135.75 626.3 135 633.74 137.45 642.66 133.38 634.99 130.82 633.16 118.64 633.92 115.56 638.44 113.26 643.99 114.51 655.17 110.38 643.77 105.37 641.55 102.11 643.65 97.19 644.72 89.09 646.45 86.65 641.15 79.65 633.14 75.85 636.56 66.61 633.21 63.63 630.83 55.51 625.67 54.18 628.46 45.4 623.22 42.02 Z" fill-rule="evenodd" />
            <path id='8' onMouseOver={handleMouseOver} data-name="Taichung City" d="M 575.24 377.7 571.03 380.16 568.63 384.73 567.37 391.85 568.36 394.69 563.64 400.47 556.45 400.44 555.39 405.42 546.4 412.06 548.27 421.88 540.97 423.07 531.29 434.61 523.8 430.8 515.43 430.49 511.18 432.35 504.97 431.25 500 425.69 495.83 426.68 491.43 435.04 488.93 436.16 481.57 432.32 476.89 435.37 472.3 434.77 465.86 439.15 460.6 433.87 457.96 437.92 452.59 438.93 447.53 445.63 435.6 445.23 429.81 451.07 414.19 462.35 412.17 460.23 399.24 461.85 392.43 473.58 388.72 476.78 382.99 477.59 377.34 476.3 372.86 473.19 365.51 479.5 360.68 481.43 350.61 477.77 349.25 484.95 345.19 484.22 341.6 477.7 335.4 477.45 330.42 474.54 326.96 477.59 323.84 486.65 324.15 495.92 318.38 496.59 315.15 498.85 311.23 508.24 300.46 521.09 290.58 525.33 284.81 521.12 279.77 520.86 274.59 522.66 263.4 519.09 254.13 512.38 249.78 514.3 243.24 512.81 241.2 503.27 241.91 496.95 237.8 490.76 236.68 483.39 220.65 481.07 211.4 478.83 204.37 473.57 200.92 468.52 201.8 464.85 194.64 449.28 193.13 447.68 173.85 441.21 178.79 438.27 181.82 434.29 187.53 421.81 190.64 418.33 195.73 406.92 200.94 397.42 204.4 395.51 215.24 383.7 216.12 379.77 227.61 363.74 231.22 360.3 240.5 347.21 247.68 352.26 251.34 359.61 257.34 362.53 268.77 376.25 274.95 380.45 284.27 382.89 295.6 392.23 305.81 396.38 314.56 397.35 319.42 400.79 325.87 407.62 335.41 408.17 342.54 405.84 354.49 406.92 361.71 402.33 359.52 389.38 367.03 386.48 375.55 387.94 381.84 390.27 385.72 389.31 389.36 391.78 394.88 390.9 400.25 399.23 407.21 404.92 413.99 404.18 415.27 399.63 422.59 394.79 427.9 396.69 442.2 389.13 449.82 379.73 460.71 379.3 463.42 374 469.69 370.87 472.49 364.84 477.91 365.19 479.04 370.68 486.27 370.04 487.6 364.53 491.19 361.15 491.33 355.37 496.86 353.36 497.39 348.12 497.74 351.61 504.63 351.67 507.17 351.24 511.26 350.88 511.48 350.56 516.25 350.3 521.07 346.73 525.26 349.79 524.03 360.67 529.46 367.47 536.26 366.22 540.11 367.87 543.62 376.3 546.66 376.82 554.51 371.69 557.46 372.51 569.51 370.36 575.24 377.7 Z" />
            <path id='9' onMouseOver={handleMouseOver} data-name="Tainan City" d="M 253.24 837.44 254.37 840.22 249.16 845.99 246.44 851.31 246.27 857.37 238.4 862.2 236.47 866.81 232.14 869.85 227.02 878.27 226.92 881.88 219.23 893.96 213.34 900.22 203.55 905.43 192.87 916.43 184.38 921.7 182.61 926.56 175.58 926.39 172.48 936.61 169.27 936.25 164.33 945.74 162.5 951.99 157.7 961.7 154.97 962.74 150.65 959.32 141.99 960.96 139.91 965.08 134.7 967.73 132.38 971.35 123.82 972.63 121.63 968.92 104.5 966.4 100.35 970.22 94.81 967.59 93.17 970.72 87.68 966.89 78.51 964.43 67.19 959.76 60.22 963.58 60.39 955 59.11 948.26 53.73 938.11 44.08 928.21 34.19 920.38 24.88 914.81 14.71 910.14 13.12 910.6 5.47 900.54 1 897.67 3.97 886.63 7.47 879.92 10.76 877.19 15.36 859.05 21 847.14 22.76 838.35 22.26 832.18 25.78 827.32 27.4 820.97 28.59 807.38 34.43 802.82 34.52 794.18 37.36 790.82 49.64 799.05 49.66 801.19 56.77 803.6 61.8 810.35 67.05 806.9 72.12 810.28 78.81 808.62 85.75 796.09 92.63 794.67 101.16 787.57 105.13 786.77 104.17 782.09 107.88 776.62 115.13 776.59 115.16 772.51 124.1 772.41 130.69 766.15 143.4 765.3 154.84 761.68 160.48 764.1 166.51 761.29 180.9 767.76 183.07 771.69 187.71 768.48 191.05 771.58 185.47 774.65 184.51 778.12 193.32 779.23 196.38 782.89 192.82 786.44 205.09 792.59 207.49 795.77 200.48 802.22 201.85 810.15 200.33 817.51 203.45 828 199.04 831.5 202.18 834.86 208.1 836.11 213.5 840.25 217.69 838.87 223.03 841.19 230.43 835.34 235.61 838.17 243.07 835.46 253.24 837.44 Z" />
            <path id='10' onMouseOver={handleMouseOver} data-name="Taoyuan City" d="M 507.25 74.02 506.97 77.14 513.26 79.39 515.1 82.5 523.91 84.18 533.68 88.77 536.08 95.25 544.87 94.87 548.69 96.02 553.24 100.75 551.31 104.03 553.57 109.36 559.16 113.92 553.28 114.98 555.58 121.79 551.96 124.14 547.84 123.29 547.06 128.01 541.68 130.87 531.17 128.66 524.91 130.56 525.7 137.42 523.31 149.23 521.04 155.25 524.51 158.14 522.52 161.87 530.93 164.83 532.46 174.69 535.58 178.62 537.25 186.23 545.36 188.26 548.24 185.71 555.36 184.6 560.58 187.86 566.36 196.15 568.96 197.25 569.7 204.05 574.24 207.84 563.72 217.05 568.53 229.23 574.57 240.24 584.2 244.06 586.53 253.04 578.26 253.32 573.6 260.59 574.99 262.23 568.32 272.95 565.48 280.36 559.42 281.34 555.5 286.16 554.04 286.74 550.78 288.27 543.3 285.34 540.29 282.27 537.68 275.81 539.46 273.54 539.53 273.25 540.31 270.76 538.48 269.18 537.48 269.29 535.07 265.26 535.08 255.84 530.01 254.43 528.47 249.22 521.28 243.3 515.1 245.25 515.11 240.38 515.23 239.33 515.27 239.11 517.02 234.47 513.19 229.09 514.57 225.3 515.75 219.46 508.93 214.8 502.4 211.92 502.09 210.9 498.17 206.52 497.29 204.9 492.75 200.76 486.95 200.61 482.21 201.49 477.52 198.32 476.97 199.16 475.09 198.39 472.24 195.02 463.88 189.65 462.68 188.53 462.48 188.45 457.6 187.11 455.48 182.1 457.15 178.81 457.61 177.63 456.2 172.42 456.12 172.36 456.03 172.26 456.64 171.01 456.22 170.47 452.91 169.41 449.36 168.99 447.65 170.6 446.44 170.01 446.23 170.01 440.2 169.18 439.07 168.9 438.25 168.42 437.49 166.01 437.42 164.04 429.26 163.89 427.81 163.12 427.79 163.09 426.75 162.39 416.38 159.67 417.34 154.32 415.34 147.23 410.3 144.08 409.84 144.15 409.33 144.4 408.58 143.39 408.08 143.2 404.12 144.35 401.99 145.17 399.82 145.02 398.57 144.67 392.06 145.48 389.17 147.54 388.14 146.32 387.52 142.38 392.34 138.23 397.42 130.25 397.19 126.03 404.52 113.22 413.93 103.97 427.92 98.76 429.28 96.12 443.39 90.55 456.36 87.49 467.3 82.87 478.5 77.18 489.6 74.89 497.73 71.68 507.25 74.02 Z" />
            <path id='11' onMouseOver={handleMouseOver} data-name="Miaoli County" d="M 424.37 309.43 420.01 313.87 422.08 322.41 421.96 323.38 428.75 323.54 432.4 324.6 441.94 319.65 453.19 320.3 461.5 321.71 468.29 320.97 479.26 317.18 482.55 320.11 482.12 324.48 482.74 325.11 487.11 328.2 487.6 328.19 491.55 334.85 497.05 337.96 497.39 347.04 497.39 348.12 496.86 353.36 491.33 355.37 491.19 361.15 487.6 364.53 486.27 370.04 479.04 370.68 477.91 365.19 472.49 364.84 469.69 370.87 463.42 374 460.71 379.3 449.82 379.73 442.2 389.13 427.9 396.69 422.59 394.79 415.27 399.63 413.99 404.18 407.21 404.92 400.25 399.23 394.88 390.9 389.36 391.78 385.72 389.31 381.84 390.27 375.55 387.94 367.03 386.48 359.52 389.38 361.71 402.33 354.49 406.92 342.54 405.84 335.41 408.17 325.87 407.62 319.42 400.79 314.56 397.35 305.81 396.38 295.6 392.23 284.27 382.89 274.95 380.45 268.77 376.25 257.34 362.53 251.34 359.61 247.68 352.26 240.5 347.21 244.33 344.25 255.27 332.29 262.99 317.28 265.83 314.51 269.34 303.43 272.49 298.32 275.95 286.44 278.39 282.42 287.41 274.4 294.57 270.12 295.27 266.07 302.83 258.26 307.73 255.8 321.63 253.51 334.98 241.48 337.06 233.76 342.39 227.04 349.49 229.21 349.67 229.28 349.71 229.29 355.02 226.09 357.87 230.52 358.23 235.53 360.69 235.68 365.03 236.37 369.56 239.53 374.09 240 377.32 238.72 382.09 241.49 382.47 243.13 380.55 248.75 383.76 253.12 386.08 254.51 387.21 256.33 388.54 257.41 393.18 260.7 396.28 260.29 397.36 260.82 397.31 261.13 397.28 261.3 396.69 262.03 396.58 263.69 397.02 265.08 397.14 265.12 399.1 266.34 410.21 271.85 412.79 275.15 413.72 275.69 418.41 274.52 419.82 275.92 423.19 277.85 423.26 277.95 423.65 279.4 423.36 280.91 426.06 283.88 426.3 287.09 424.02 290.05 422.43 293.57 422.26 294.07 420.49 298.01 418.52 299.74 416.68 298.69 417.45 300.31 422.55 303.17 424.37 309.43 Z" />
            <path id='12' onMouseOver={handleMouseOver} data-name="Chiayi City" d="M 170.23 719.03 176.29 726.07 180.68 723.6 184.57 724.2 186.45 729.62 191.43 730.12 195.09 736.51 189.31 745.4 182.09 741.72 178.73 741.85 172.36 748.6 167 750.74 163.2 745.5 162.86 742.07 157.16 742.38 150.75 738.05 148.4 733.47 152.59 724.86 155.88 726.76 164.18 720.95 170.23 719.03 Z" />
            <path id='13' onMouseOver={handleMouseOver} data-name="Chiayi County" d="M 284.46 681.68 293.36 680.06 297.93 681.11 304.1 685.4 313.76 687.37 317.94 685.66 321.89 691.22 320.23 696.18 320.67 701.11 315.9 707.87 315.81 711.77 321.68 721.95 323.25 733.07 328.05 737.97 337.97 737.06 344.92 739.41 347.47 736.2 359.71 736.17 371.82 739.62 375.85 738.66 364.07 743.79 357.78 743.11 351.36 746.16 347.45 752.49 338.27 757.06 332.16 758.83 323.84 776.79 314.23 779.91 307.68 785.71 305.57 789.99 295.43 789.16 295.58 792.7 291.31 798.18 285.04 801.42 284.36 804.75 276.92 803.5 273.78 806.21 273.44 811.26 269.4 813.24 254.84 808.93 249.33 808.58 249.09 816.7 247.22 819.58 251.23 827.47 253.24 837.44 243.07 835.46 235.61 838.17 230.43 835.34 223.03 841.19 217.69 838.87 213.5 840.25 208.1 836.11 202.18 834.86 199.04 831.5 203.45 828 200.33 817.51 201.85 810.15 200.48 802.22 207.49 795.77 205.09 792.59 192.82 786.44 196.38 782.89 193.32 779.23 184.51 778.12 185.47 774.65 191.05 771.58 187.71 768.48 183.07 771.69 180.9 767.76 166.51 761.29 160.48 764.1 154.84 761.68 143.4 765.3 130.69 766.15 124.1 772.41 115.16 772.51 115.13 776.59 107.88 776.62 104.17 782.09 105.13 786.77 101.16 787.57 92.63 794.67 85.75 796.09 78.81 808.62 72.12 810.28 67.05 806.9 61.8 810.35 56.77 803.6 49.66 801.19 49.64 799.05 37.36 790.82 41.38 781.38 42.84 772.83 53.37 772.42 54.26 764.22 50 764.21 50.04 757.49 48.43 755.16 50.11 744.8 48.29 737.63 52.57 732.79 53.4 728.37 43.61 731.14 37.91 728.19 37.7 720.29 41.05 718.22 48.56 717.97 56.92 719.42 62.73 722.39 72.42 721.6 79.69 724.62 86.16 723.26 89.21 720.79 87.35 710.76 93.02 707.78 95.98 712.85 99.39 713.97 101.19 708.84 107.05 705.74 106.39 701.7 114.97 700.38 124.07 694.43 124.29 689.35 133.58 688.45 137.54 682.89 142.89 682.04 145.65 677.57 152.11 675.18 159.92 678.27 167.63 675.57 173.42 675.35 182.79 672.83 191.16 671.9 198.46 681.58 206.26 688.17 214.18 688.93 222.3 692.67 227.19 691.89 235.64 693.05 241.86 689.81 250.09 688.65 252.18 697.16 260.23 694.72 262.43 697.85 269.6 695.52 279.25 698.53 285.01 695.3 285.68 692.2 281.93 684.57 284.46 681.68 Z M 170.23 719.03 164.18 720.95 155.88 726.76 152.59 724.86 148.4 733.47 150.75 738.05 157.16 742.38 162.86 742.07 163.2 745.5 167 750.74 172.36 748.6 178.73 741.85 182.09 741.72 189.31 745.4 195.09 736.51 191.43 730.12 186.45 729.62 184.57 724.2 180.68 723.6 176.29 726.07 170.23 719.03 Z" fill-rule="evenodd" />
            <path id='14' onMouseOver={handleMouseOver} data-name="Kaohsiung City" d="M 399.14 752.41 404.78 757.5 403.45 765.51 393.44 770.02 393.02 773.8 388.19 778.51 387.78 783.33 393 784.22 397.18 788.54 401.06 786.7 402.96 790.94 412.4 796.57 411.71 803.34 405.84 805.53 404.4 808.17 397.33 809.93 387.37 814.95 381 814.83 376.11 820.97 367.94 829.21 363.63 829.33 358.89 832.21 357.4 835.87 357.38 843.22 355.26 848.66 357.68 852.67 352.03 856.91 350.64 863.17 343.22 867.11 347.77 872.99 346.63 879.59 348.29 887.46 345.64 894.38 340.29 903.82 345.1 910.16 344.38 914 337.91 914.97 336.8 924.73 325.33 936.02 324.49 940.08 320.77 943.73 322.32 947.15 321.18 954.19 325.76 963.36 323.84 966.2 329.27 975.88 336.42 977.03 338.54 979.51 337.2 983.87 340.33 985.26 338.37 991.25 333.78 985.39 331.36 987.67 325.66 981.9 321.59 982.12 312.77 988.05 309.51 991.57 303.75 994.43 297.82 988.75 297.08 985.72 289.22 978.97 282.1 976.03 273.85 976.1 268.2 982.47 262.63 985.54 256.25 984.56 255.1 976.48 249.85 974.28 240.01 978.15 234.04 979.1 221.53 989.19 213.22 997 200.83 995.37 195.4 997.13 181.79 993.23 178.77 996.26 176.87 1008.51 174.22 1014.47 172.73 1024.15 173.52 1041.49 170.21 1053.66 168.24 1055.17 165.82 1063.05 165.48 1076.99 164.63 1082.17 169.51 1089.74 170 1094.84 168.27 1104.46 163.65 1111.58 160.26 1122.15 161.42 1130.33 160.9 1142.21 151.79 1140.12 140.26 1133.13 131.27 1125.75 119.53 1118.39 113.75 1111.34 111.87 1106.3 96.12 1088.5 95.94 1079.55 90.54 1068.81 91.03 1064.3 96.39 1058.94 95.5 1049.66 93.09 1041.97 75.37 1005.56 69.55 1006.51 66.56 1002.46 72.81 1000.5 67.33 985.35 66.41 979.09 60.22 963.58 67.19 959.76 78.51 964.43 87.68 966.89 93.17 970.72 94.81 967.59 100.35 970.22 104.5 966.4 121.63 968.92 123.82 972.63 132.38 971.35 134.7 967.73 139.91 965.08 141.99 960.96 150.65 959.32 154.97 962.74 157.7 961.7 162.5 951.99 164.33 945.74 169.27 936.25 172.48 936.61 175.58 926.39 182.61 926.56 184.38 921.7 192.87 916.43 203.55 905.43 213.34 900.22 219.23 893.96 226.92 881.88 227.02 878.27 232.14 869.85 236.47 866.81 238.4 862.2 246.27 857.37 246.44 851.31 249.16 845.99 254.37 840.22 253.24 837.44 251.23 827.47 247.22 819.58 249.09 816.7 249.33 808.58 254.84 808.93 269.4 813.24 273.44 811.26 273.78 806.21 276.92 803.5 284.36 804.75 285.04 801.42 291.31 798.18 295.58 792.7 295.43 789.16 305.57 789.99 307.68 785.71 314.23 779.91 323.84 776.79 332.16 758.83 338.27 757.06 347.45 752.49 351.36 746.16 357.78 743.11 364.07 743.79 375.85 738.66 379.56 737.78 392.86 741.62 396.39 741.65 399.37 745.88 397.27 747.94 399.14 752.41 Z" />
            <path id='15' onMouseOver={handleMouseOver} data-name="Taitung County" d="M 593.02 752.65 588.18 762.36 587.35 767.79 584.46 772.08 583.39 785.87 579.29 801.96 573.23 803.43 567.53 811.8 565.32 820.73 562.67 824.1 560.28 833.25 562.5 836.72 557.84 842.07 553.52 844.13 552.85 849 557.33 862.55 554.19 873.5 558.77 877.99 557.1 881.25 552.32 882.25 547.4 889.48 540.62 889.21 536.16 895.86 529.58 914.23 528.62 920.19 525.54 921.85 522.79 927.27 523.53 930.44 520.6 935.55 512.03 946.29 506.58 950.07 505.44 955.58 501.33 963.83 499.33 965.06 492.62 975.85 489.73 976.52 488.2 981.25 477.28 983.19 470.2 988.59 468.58 996.82 472.61 1002.44 474.03 1010.22 468.75 1012.39 466.13 1015.52 464.35 1024.72 456.2 1029.87 444.64 1041.14 433.76 1046.87 425.79 1049.67 415.3 1058.59 408.84 1060.91 401.97 1069.42 398.06 1081.4 396.68 1093.72 387.18 1101.59 383.76 1107.78 376.6 1127.68 370.55 1149 361.57 1170.56 358.66 1176 356.22 1186.37 350.61 1196.26 349.38 1207.01 349.38 1219.32 351.17 1231.84 339.22 1238.54 335.99 1234.1 328.22 1232.95 318.55 1225.07 312.23 1227.51 311.61 1219.73 307.74 1212.66 303.36 1211.06 311.04 1202.85 309.3 1195.88 306.31 1191.88 299.41 1191.13 297.49 1186.46 293.16 1185.83 291.17 1181.45 295.45 1167.94 304.42 1166.11 308.16 1162.8 302.27 1152.06 302.84 1150.18 295.44 1146.32 292.83 1146.36 295.18 1136.92 297.76 1133.16 297.3 1129.15 293.74 1125.25 292.18 1115.88 287.94 1108.85 288.76 1101.9 291.35 1100.93 290.47 1093.98 294.12 1088.64 293.34 1084.4 296.74 1077.16 306.83 1063.87 306.78 1060.22 311.4 1053.34 319.95 1052.63 327.17 1050.13 331.97 1042.1 346.01 1042.07 350.53 1033.79 350.06 1022.02 354.22 1018.38 353.99 1008.7 349.11 1003.94 340.01 1001.83 338.37 991.25 340.33 985.26 337.2 983.87 338.54 979.51 336.42 977.03 329.27 975.88 323.84 966.2 325.76 963.36 321.18 954.19 322.32 947.15 320.77 943.73 324.49 940.08 325.33 936.02 336.8 924.73 337.91 914.97 344.38 914 345.1 910.16 340.29 903.82 345.64 894.38 348.29 887.46 346.63 879.59 347.77 872.99 343.22 867.11 350.64 863.17 352.03 856.91 357.68 852.67 355.26 848.66 357.38 843.22 357.4 835.87 358.89 832.21 363.63 829.33 367.94 829.21 376.11 820.97 381 814.83 387.37 814.95 397.33 809.93 404.4 808.17 408.67 806.75 415.69 810.92 418.01 815.31 418.15 820.79 421.23 827.67 426.71 834.04 430.26 833.67 436.89 837.85 445.16 837.94 449.38 846.72 455.36 847.68 457.87 844.93 463.8 843.23 469.4 845.84 472.92 852 473.29 857.38 477.78 863.51 478.49 869.42 486.15 871.86 489.13 876.07 493.55 874.99 500.69 881.89 499.57 886.02 505.33 887.21 507.67 885.01 515.33 883.16 520.39 883.44 522.81 880.71 522.16 872.44 523.79 867.91 521.01 861.7 523.55 856.05 528.04 856.24 532.85 843.62 532.73 840.41 536.64 838.03 535.16 834.71 538.76 828.42 537.94 826.04 545.37 819.26 544.72 808.72 553.36 798.27 558.21 788.49 563.47 782.81 556.74 780.6 554.28 772.65 558.51 767.11 562.17 758.86 572.84 749.13 583.83 750.31 586.48 754.15 593.02 752.65 Z" />
            <path id='16' onMouseOver={handleMouseOver} data-name="Hualien County" d="M 705.1 397.62 703.28 402.69 694.66 411.89 693.03 419.39 686.65 425.68 682.08 426.86 677.71 433.78 664.02 441.77 660.45 446.47 658.5 455.44 660.81 462.08 660.63 470.51 657.12 475.75 646.35 483.34 642.63 488.63 641.57 499.97 647.23 512.55 652.53 516.93 654.24 521.15 646.32 537.06 641.3 535.56 637.7 543.79 639.71 551.64 637.01 560.73 637.21 565.31 634.21 582.41 625.45 601 623.15 612.5 623.81 622.89 614.47 640.97 616.11 646.39 613.22 655.71 612.24 663.46 609.06 667.65 607.19 675.37 606.68 687.61 603.47 699.33 599.17 705.61 596.04 719.33 597.42 728.42 600.22 731.55 594.53 744.05 593.02 752.65 586.48 754.15 583.83 750.31 572.84 749.13 562.17 758.86 558.51 767.11 554.28 772.65 556.74 780.6 563.47 782.81 558.21 788.49 553.36 798.27 544.72 808.72 545.37 819.26 537.94 826.04 538.76 828.42 535.16 834.71 536.64 838.03 532.73 840.41 532.85 843.62 528.04 856.24 523.55 856.05 521.01 861.7 523.79 867.91 522.16 872.44 522.81 880.71 520.39 883.44 515.33 883.16 507.67 885.01 505.33 887.21 499.57 886.02 500.69 881.89 493.55 874.99 489.13 876.07 486.15 871.86 478.49 869.42 477.78 863.51 473.29 857.38 472.92 852 469.4 845.84 463.8 843.23 457.87 844.93 455.36 847.68 449.38 846.72 445.16 837.94 436.89 837.85 430.26 833.67 426.71 834.04 421.23 827.67 418.15 820.79 418.01 815.31 415.69 810.92 408.67 806.75 404.4 808.17 405.84 805.53 411.71 803.34 412.4 796.57 402.96 790.94 401.06 786.7 397.18 788.54 393 784.22 387.78 783.33 388.19 778.51 393.02 773.8 393.44 770.02 403.45 765.51 404.78 757.5 399.14 752.41 406.5 748.37 413.98 746.12 416.77 741.73 408.71 736.68 412.63 733.34 414.27 728.96 418.01 726.6 420.61 718.92 430.12 720.38 441.55 717.9 447.65 720.22 452.24 715.4 453.82 707.91 452.52 705.02 457.64 699.02 454.24 696.56 454.83 691.37 461.29 691.46 471.43 685.83 476.14 687.74 478.92 686.01 483.6 675.23 483.41 670.26 487.91 661.28 486.79 655.28 489.48 651.07 490.23 642.09 485.25 627.86 486.74 625.32 478.94 622.49 475.77 617.04 485.06 611.36 484.76 601.93 487.56 600.49 489.66 588.85 493.35 584.38 494.95 578.2 501.23 571.63 500.35 562.15 503.83 562.04 504.48 555.74 502.69 549.66 505.04 538.53 499.78 534.69 497.87 527.85 501.62 522.19 508.19 508.73 507.18 502.87 523.28 490.5 521.66 486.29 525.44 478.62 520.35 477.81 512.28 471.35 506.44 469.96 509.03 461.36 509.16 453.11 516.23 452.15 524.34 445.65 533.98 444.01 531.29 434.61 540.97 423.07 548.27 421.88 546.4 412.06 555.39 405.42 556.45 400.44 563.64 400.47 568.36 394.69 567.37 391.85 568.63 384.73 571.03 380.16 575.24 377.7 580.47 381.38 588.74 384.28 593.84 387.96 603.53 386.43 617.21 391.22 618.82 394.65 637.75 398.69 633.53 392.44 634.69 390.32 648.21 389.68 649.08 384.28 643.69 380.73 643.67 376.92 647.4 375.33 664.75 386.28 681.02 393.01 693.28 394.57 699.07 398.05 705.1 397.62 Z" />
            <path id='17' onMouseOver={handleMouseOver} data-name="Hsinchu City" d="M 366.94 237.41 360.69 235.68 358.23 235.53 357.87 230.52 355.02 226.09 349.71 229.29 349.67 229.28 349.49 229.21 342.39 227.04 349.91 217.75 349.48 205.42 353.79 192.46 362.83 180.07 368.97 182.02 374.95 188.31 393.14 193.27 400.3 199.21 403.04 210.24 406.05 217.62 401.4 219.69 398.45 213.89 391.36 210.24 388.27 214.89 379.84 219.72 374.39 224.98 371.27 224.23 368.03 231.4 366.94 237.41 Z" />
            <path id='18' onMouseOver={handleMouseOver} data-name="Hsinchu County" d="M 410.3 144.08 415.34 147.23 417.34 154.32 416.38 159.67 426.75 162.39 427.79 163.09 427.81 163.12 429.26 163.89 437.42 164.04 437.49 166.01 438.25 168.42 439.07 168.9 440.2 169.18 446.23 170.01 446.44 170.01 447.65 170.6 449.36 168.99 452.91 169.41 456.22 170.47 456.64 171.01 456.03 172.26 456.12 172.36 456.2 172.42 457.61 177.63 457.15 178.81 455.48 182.1 457.6 187.11 462.48 188.45 462.68 188.53 463.88 189.65 472.24 195.02 475.09 198.39 476.97 199.16 477.52 198.32 482.21 201.49 486.95 200.61 492.75 200.76 497.29 204.9 498.17 206.52 502.09 210.9 502.4 211.92 508.93 214.8 515.75 219.46 514.57 225.3 513.19 229.09 517.02 234.47 515.27 239.11 515.23 239.33 515.11 240.38 515.1 245.25 521.28 243.3 528.47 249.22 530.01 254.43 535.08 255.84 535.07 265.26 537.48 269.29 538.48 269.18 540.31 270.76 539.53 273.25 539.46 273.54 537.68 275.81 540.29 282.27 543.3 285.34 550.78 288.27 554.04 286.74 556.8 288.79 556.98 289.03 558.08 290.57 558.1 290.62 559.17 293.66 554.81 297.61 554.06 298.47 552.96 307.08 554.93 311.35 551.21 313.33 551.07 313.38 550.25 314.3 548.42 317.41 546.17 319.22 545.15 319.2 542.44 324 537.28 328.49 535.58 328.91 532.36 329.46 528.46 336.3 525.91 338.05 522.36 343.58 521.07 346.73 516.25 350.3 511.48 350.56 511.26 350.88 507.17 351.24 504.63 351.67 497.74 351.61 497.39 347.04 497.05 337.96 491.55 334.85 487.6 328.19 487.11 328.2 482.74 325.11 482.12 324.48 482.55 320.11 479.26 317.18 468.29 320.97 461.5 321.71 453.19 320.3 441.94 319.65 432.4 324.6 428.75 323.54 421.96 323.38 422.08 322.41 420.01 313.87 424.37 309.43 422.55 303.17 417.45 300.31 416.68 298.69 418.52 299.74 420.49 298.01 422.26 294.07 422.43 293.57 424.02 290.05 426.3 287.09 426.06 283.88 423.36 280.91 423.65 279.4 423.26 277.95 423.19 277.85 419.82 275.92 418.41 274.52 413.72 275.69 412.79 275.15 410.21 271.85 399.1 266.34 397.14 265.12 397.02 265.08 396.58 263.69 396.69 262.03 397.28 261.3 397.31 261.13 397.36 260.82 396.28 260.29 393.18 260.7 388.54 257.41 387.21 256.33 386.08 254.51 383.76 253.12 380.55 248.75 382.47 243.13 382.09 241.49 377.32 238.72 374.09 240 366.94 237.41 368.03 231.4 371.27 224.23 374.39 224.98 379.84 219.72 388.27 214.89 391.36 210.24 398.45 213.89 401.4 219.69 406.05 217.62 403.04 210.24 400.3 199.21 393.14 193.27 374.95 188.31 368.97 182.02 362.83 180.07 368.49 175.08 373.87 163.71 376.4 160.69 380.75 150.37 385.73 145.73 388.14 146.32 389.17 147.54 392.06 145.48 398.57 144.67 399.82 145.02 401.99 145.17 404.12 144.35 408.08 143.2 408.58 143.39 409.33 144.4 409.84 144.15 410.3 144.08 Z" />
            <path id='19' onMouseOver={handleMouseOver} data-name="Pingtung County" d="M 338.37 991.25 340.01 1001.83 349.11 1003.94 353.99 1008.7 354.22 1018.38 350.06 1022.02 350.53 1033.79 346.01 1042.07 331.97 1042.1 327.17 1050.13 319.95 1052.63 311.4 1053.34 306.78 1060.22 306.83 1063.87 296.74 1077.16 293.34 1084.4 294.12 1088.64 290.47 1093.98 291.35 1100.93 288.76 1101.9 287.94 1108.85 292.18 1115.88 293.74 1125.25 297.3 1129.15 297.76 1133.16 295.18 1136.92 292.83 1146.36 295.44 1146.32 302.84 1150.18 302.27 1152.06 308.16 1162.8 304.42 1166.11 295.45 1167.94 291.17 1181.45 293.16 1185.83 297.49 1186.46 299.41 1191.13 306.31 1191.88 309.3 1195.88 311.04 1202.85 303.36 1211.06 307.74 1212.66 311.61 1219.73 312.23 1227.51 318.55 1225.07 328.22 1232.95 335.99 1234.1 339.22 1238.54 351.17 1231.84 352.23 1238.53 350.32 1243.93 351.21 1249.16 348.91 1252.45 350.33 1261.6 349.66 1270.6 351.27 1274.45 347.76 1277.46 349.61 1286.73 353.48 1288.75 350.27 1295.48 350.1 1311.16 353.15 1317.35 348.32 1320.82 347.45 1324.57 343.88 1326.89 342.9 1331.67 330.91 1336.77 329.41 1351.39 332.06 1357.9 337.57 1364.45 339.41 1370.43 332.96 1373 330.94 1366.01 327.36 1365.07 321.3 1357.67 317.6 1358.02 310.98 1354.52 305.49 1353.97 298.1 1347.69 291.55 1351.58 290.91 1357.75 287.97 1363.58 283.6 1364.15 276.28 1357.77 277.48 1339.03 274.27 1333.81 269.53 1330.16 266.06 1321.57 266.83 1317.99 273.82 1308.61 274.33 1302.68 271.73 1297.83 278.81 1293.61 275.66 1281.71 271.04 1274.57 271.8 1270.7 268.41 1258.06 265.5 1251.21 265.91 1246.42 260.8 1239.69 260.73 1237.16 255.05 1233.28 251.57 1228.08 252.7 1223.05 248.91 1213.84 248.93 1209.59 246.28 1205.09 233.76 1193.04 231.26 1187.76 225.88 1182.26 211.37 1172.96 194.81 1165.02 174.65 1154.04 160.9 1142.21 161.42 1130.33 160.26 1122.15 163.65 1111.58 168.27 1104.46 170 1094.84 169.51 1089.74 164.63 1082.17 165.48 1076.99 165.82 1063.05 168.24 1055.17 170.21 1053.66 173.52 1041.49 172.73 1024.15 174.22 1014.47 176.87 1008.51 178.77 996.26 181.79 993.23 195.4 997.13 200.83 995.37 213.22 997 221.53 989.19 234.04 979.1 240.01 978.15 249.85 974.28 255.1 976.48 256.25 984.56 262.63 985.54 268.2 982.47 273.85 976.1 282.1 976.03 289.22 978.97 297.08 985.72 297.82 988.75 303.75 994.43 309.51 991.57 312.77 988.05 321.59 982.12 325.66 981.9 331.36 987.67 333.78 985.39 338.37 991.25 Z" />
          </g>
        </svg>
      </SocialMediaWrapper>
      <div className='col' style={{display:'flex', flexDirection:'column', }} >
        <div style={{ fontSize: '1em', fontWeight: '400', color: 'gray' }} >
          現在
        </div>
        <div style={{ fontSize: '1.4em', fontWeight: '400', color: 'gray', marginBottom: '1em' }} >
          {Location[hoveredArea]}
        </div>
        <div style={{ fontSize: '1em', fontWeight: '400', color: 'gray' }} >
          的使用人數為
        </div>
        <div style={{ fontSize: '1.4em', fontWeight: '400', color: 'gray' }} >
          12
        </div>
        
      </div>
    </div>
  );
};

export default SVGMap;
