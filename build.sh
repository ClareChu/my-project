echo [INFO] 删除 dist 和 node_modules
rm -rf dist/ 
rm -rf node_modules/

echo [INFO] npm install 
npm install


echo [INFO] npm run build
npm run build


docker build -t 51well-video .
