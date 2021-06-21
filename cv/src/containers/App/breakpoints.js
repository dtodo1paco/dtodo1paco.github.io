/**
 * Breakpoints to link page width with Header height
 */

export const BP_XXS = 300;
const BP_W = [250, 252, 260, 285, 318, 375, 400, 425, 505, 565, 700, 725, 768, 800, 890, 1085, 9999];
const BP_H = [960, 900, 800, 600, 510, 485, 470, 450, 440, 460, 410, 380, 350, 310, 300, 260, 220];

const BP = BP_W.reduce( (bp, curr, index) => {
  bp.push({
    id: 'bp-' + curr,
    width: curr,
    height: BP_H[index]
  });
  return bp;
}, []);

export default BP;