export async function registerUser(userData) {
  console.log("Gửi dữ liệu đăng ký:", userData);
  return new Promise(resolve => setTimeout(resolve, 1000));
}