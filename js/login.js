// JavaScript Document

    function checkForm()
    {  
       if (CheckName()&&CheckPwd()){return true;}
       return false;
    }
    function CheckName()
    {
        var name=document.loginForm.uCode;
        if (name.value.length==0)
        {
           window.alert("用户名不能为空！");
           name.focus();
           return false;
        }
        for (var i=0;i<name.value.length;i++)
        {
           var xiaoxie=name.value.toLowerCase().charAt(i); 
           if ((!(xiaoxie>='0' && xiaoxie<='9'))&&(!(xiaoxie>='a' && xiaoxie <='z')))
           {     window.alert("用户名只能由字母和数字组成！");
               name.select();
               return false;
           }
        }
        return true;
    }
    function CheckPwd()
    {
        var pwd=document.loginForm.pwd; 
        if (pwd.value.length==0)
        {
           window.alert("密码不能为空！");
           pwd.focus();
           return false;
        }
        if (pwd.value.length<6)
        {
           window.alert("密码长度不能小于6位！");
           pwd.select();
           return false;
        }
        return true;
    }
