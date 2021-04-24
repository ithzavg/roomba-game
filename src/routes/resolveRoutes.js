const resolveRoutes = (route) =>{
    if (route.length <= 3) {
         let validRoute = route === '/' ? route : route === '/sceneone' ? route : '/scenetwo';
        return validRoute;
      }
      console.log(route);
    return `/${route}`;
}

export default resolveRoutes;