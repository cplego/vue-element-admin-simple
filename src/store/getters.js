const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  user_id: state => state.user.user_id,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  routers: state => state.permission.routers,
  buttons: state => state.permission.buttons,
  errorLogs: state => state.errorLog.logs
}
export default getters
