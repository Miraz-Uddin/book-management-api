export function home(req, res) {
  res.status(200).json({
    status: "success",
    data: "Welcome to Express Home Get",
  });
}
export function homePost(req, res) {
  res.status(200).json({
    status: "success",
    data: "Welcome to Express Home Post",
  });
}
