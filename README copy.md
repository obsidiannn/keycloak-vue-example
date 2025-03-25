# 说明

* dev keycloak 登录地址： https://login.sso.dev.aks.chilunyc.com/auth 
    * admin/admin
    
* 现在已经创建client 
  * clientID: mvskf， secret: 9ddc62e8-19f9-4c4e-aa8b-fddec1de2703
  
* 登录及获取信息已经调通，可以在 keycloak 上设置不同的登录主题 
  * skf-v3-theme3 手机号登录
  * skf-v3-theme2 ad登录

![](./img/20230712-121702.jpg)

* 其中，valid redirect url 是前端可允许的重定向地址，这里在部署上线后会设置响应的url地址
