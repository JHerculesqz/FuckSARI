echo off

echo STEP1.xcopy conf
rmdir /s /Q C:\test\FuckSARI\
xcopy %~dp0conf\FuckSARI C:\test\FuckSARI\ /s /y

pause>null