import ACTION from './actiontsTypes';

export const getGoodsAction = () => ({
  type: ACTION.GOODS_ACTION,
});

export const getSingleGoodsAction = id => ({
  type: ACTION.SINGLE_GOODS_ACTION,
  id,
});

export const updateSingleGoodsAction = id => ({
  type: ACTION.SINGLE_GOODS_ACTION,
  id,
});
