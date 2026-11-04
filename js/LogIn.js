const btnSignIn = document.getElementById("aSignIn");
const btnLogIn = document.getElementById("aLogIn");
const LogIn = `
<div class="login-container">
    <div class="input-group one">
        <label>Đăng nhập với Email</label>
        <input type="email" placeholder="Nhập Email " class="inputEmail" required/>
    </div>
    
    <div class="input-group">
        <label class="textPassword">Mật khẩu</label>
        <input type="password" name="password" class="inputPassword" placeholder="Nhập mật khẩu" required />
    </div>

    <button type="submit" class="LogIn1">Đăng nhập</button>
    <a href="#" class="Password1">Quên mật khẩu?</a>
</div>
`;
const signIn = `
<div class="login-container">
    <div class="input-group one">
        <label>Họ và tên</label>
        <input type="text" placeholder="Nhập họ và tên" class="inputEmail" required />
    </div>

    <div class="input-group">
        <label>Email</label>
        <input type="email" placeholder="Nhập Email" class="inputEmail" required />
    </div>
              
    <div class="input-group">
        <label class="textPassword">Mật khẩu</label>
        <input type="password" name="password" class="inputPassword" placeholder="Nhập mật khẩu" required />
    </div>

    <button type="submit" class="LogIn1">Đăng ký</button>
</div>
 `;

document.getElementById("LoginAndSignIn").innerHTML = LogIn;

btnLogIn.addEventListener("click", function () {
  document.getElementById("LoginAndSignIn").innerHTML = LogIn;
});
btnSignIn.addEventListener("click", function () {
  document.getElementById("LoginAndSignIn").innerHTML = signIn;
});
