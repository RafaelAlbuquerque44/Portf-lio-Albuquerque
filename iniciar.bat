@echo off
title Portfolio - Menu de Inicializacao
color 0A

:menu
cls
echo ===================================================
echo      Gerenciador do Portfolio Albuquerque
echo ===================================================
echo.
echo Escolha a acao desejada:
echo [1] Iniciar Servidor Local (Testar no Navegador)
echo [2] Atualizar e Publicar no GitHub (Colocar Online)
echo [3] Instalar Dependencias do Projeto
echo [4] Sair
echo.
set /p opcao="Digite a opcao (1, 2, 3 ou 4): "

if "%opcao%"=="1" goto iniciar
if "%opcao%"=="2" goto publicar
if "%opcao%"=="3" goto instalar
if "%opcao%"=="4" goto sair

echo Opcao invalida! Tente novamente.
pause
goto menu

:iniciar
cls
echo ===================================================
echo Iniciando o servidor local...
echo O navegador abrira automaticamente quando estiver pronto.
echo ===================================================
call npm run dev -- --open
pause
goto menu

:publicar
cls
echo ===================================================
echo Preparando para publicar no GitHub Pages...
echo Isso pode demorar alguns minutos.
echo ===================================================
call npm run deploy
echo.
echo ===================================================
echo Salvando alteracoes recentes no repositorio...
echo ===================================================
call git add .
call git commit -m "update: publicacao via menu automatico"
call git push origin main
echo.
echo Publicacao concluida com sucesso! O site esta online!
pause
goto menu

:instalar
cls
echo ===================================================
echo Instalando dependencias do projeto...
echo ===================================================
call npm install
echo.
echo Dependencias instaladas!
pause
goto menu

:sair
exit
