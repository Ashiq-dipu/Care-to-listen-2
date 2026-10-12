@echo off
title Care 2 Listen — App Launcher
echo ===================================================================
echo               CARE 2 LISTEN — APP LAUNCHER
echo ===================================================================
echo.
echo Select which server you would like to start:
echo.
echo   [1] Start Lovable React App (lovable/ folder - Recommended)
echo   [2] Start Vanilla Site (root folder)
echo   [3] Start Both (Lovable App + Backend API Server)
echo.
set /p choice="Enter option [1, 2, or 3] (default is 1): "

if "%choice%"=="" set choice=1

if "%choice%"=="1" goto start_lovable
if "%choice%"=="2" goto start_root
if "%choice%"=="3" goto start_both

:start_lovable
echo.
echo [INFO] Starting Lovable React server...
call "%~dp0start-loveable.bat"
goto end

:start_root
echo.
cd /d "%~dp0"
if not exist "node_modules\" (
    echo [INFO] Installing root dependencies...
    call npm install
)
echo [INFO] Launching browser at http://localhost:5173/ ...
start "" http://localhost:5173/
echo [INFO] Starting Vite dev server...
call npm run dev
goto end

:start_both
echo.
echo [INFO] Launching backend API server in background...
start "Care 2 Listen Backend API" cmd /k "cd /d \"%~dp0\" && node server.js"
echo [INFO] Launching Lovable React server...
call "%~dp0start-loveable.bat"
goto end

:end
pause
