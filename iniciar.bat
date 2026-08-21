@echo off
echo ===================================================
echo            Iniciando o Portfolio Website           
echo ===================================================

echo Verificando dependencias...
if not exist "node_modules\" (
    echo.
    echo A pasta node_modules nao foi encontrada.
    echo Baixando e instalando dependencias (npm install)...
    cmd /c npm install
) else (
    echo Dependencias ja estao instaladas.
)

echo.
echo Iniciando o servidor de desenvolvimento e abrindo o navegador...
echo Se o navegador nao abrir, acesse: http://localhost:5173
echo.
start http://localhost:5173
cmd /c npm run dev

echo.
echo O servidor foi encerrado ou ocorreu um erro.
pause
