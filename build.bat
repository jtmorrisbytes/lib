rmdir /s /q dist;
.\node_modules\.bin\tsc
copy src\package.json dist
copy src\package-lock.json dist