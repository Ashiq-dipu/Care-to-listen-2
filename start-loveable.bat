@echo off
title Care 2 Listen — Lovable React Dev Server
echo ===================================================================
echo               CARE 2 LISTEN — LOVABLE APP SERVER
echo               Starting React + Vite Development Server...
echo ===================================================================
echo.

cd /d "%~dp0lovable"

:: Check if node_modules exists in lovable folder, otherwise install
if not exist "node_modules\" (
    echo [INFO] First time setup detected in lovable folder. Installing dependencies...
    call npm install
    echo.
)

echo [INFO] Opening browser at http://localhost:5173/ ...
start "" http://localhost:5173/

echo [INFO] Launching Lovable Vite development server...
echo.
call npm run dev

pause
