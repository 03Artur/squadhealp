import ACTION_TYPES from "../../actiontsTypes";

export const closeOpenAffiliateDashboardMenuActionCreator = (isOpen) => {
  return  {
      type: ACTION_TYPES.AFFILIATE_DASHBOARD_MENU_CLOSE_OPEN_ACTION,
      isOpen,
  }
};


