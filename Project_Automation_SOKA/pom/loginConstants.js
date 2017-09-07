/**
 * Created by nimmi on 11/7/17.
 */
var ConstantValues = (function ()
{
   var username,password,usernamepath,passwordpath,loginbutton;
    module.exports = {
        usernamepath : element(By.id('login-username')),
        passwordpath : element(By.id('login-password')),
        loginbutton  : element(By.xpath('html/body/div/div/div/div/div[2]/form/div[3]/div/button')),
        username  : 'm2',
        password : 'qwerty'
    };
}());


