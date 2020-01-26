echo off

echo STEP0.delete bin
rmdir  /s /Q %~dp0..\bin\

echo STEP1.xcopy jar
xcopy %~dp0..\app-fuck-sari\target\app-fuck-sari-1.0.0-a1.jar %~dp0..\bin\app-fuck-sari\ /s /y

echo STEP2.xcopy conf
rem xcopy %~dp0conf\au3tech %~dp0..\bin\ /s /y

echo STEP3.xcopy dockerFile
xcopy %~dp0..\app-fuck-sari\src\main\docker\Dockerfile %~dp0..\bin\app-fuck-sari\ /s /y

pause>null