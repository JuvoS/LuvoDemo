Attribute VB_Name = "Mode"
Option Explicit
   
Public Declare Function GetCursorPos Lib "user32" (lpPoint As POINTAPI) As Long
Public Declare Function ScreenToClient Lib "user32" (ByVal HWnd As Long, lpPoint As POINTAPI) As Long
Public Declare Function SetWindowPos Lib "user32" (ByVal HWnd As Long, ByVal hWndInsertAfter As Long, ByVal lPosX As Long, ByVal lPosY As Long, ByVal cx As Long, ByVal cy As Long, ByVal wFlags As Long) As Long
Private Declare Function SetLayeredWindowAttributes Lib "user32" (ByVal HWnd As Long, ByVal crKey As Long, ByVal bAlpha As Byte, ByVal dwFlags As Long) As Long
Private Declare Function SetWindowLong Lib "user32.dll" Alias "SetWindowLongA" (ByVal HWnd As Long, ByVal nIndex As Long, ByVal dwNewLong As Long) As Long
Private Declare Function GetWindowLong Lib "user32" Alias "GetWindowLongA" (ByVal HWnd As Long, ByVal nIndex As Long) As Long
Public Declare Function SendMessage Lib "user32" Alias "SendMessageA" (ByVal HWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
Public Declare Function ReleaseCapture Lib "user32" () As Long
Public Declare Function GetLastInputInfo Lib "user32" (plii As LASTINPUTINFO) As Boolean
Public Declare Function GetTickCount Lib "kernel32" () As Long
Private Declare Function GetPrivateProfileString Lib "kernel32" Alias "GetPrivateProfileStringA" (ByVal lpApplicationName As String, ByVal lpKeyName As Any, ByVal lpDefault As String, ByVal lpReturnedString As String, ByVal nSize As Long, ByVal lpFileName As String) As Long
Private Declare Function WritePrivateProfileString Lib "kernel32" Alias "WritePrivateProfileStringA" (ByVal lpApplicationName As String, ByVal lpKeyName As Any, ByVal lpString As Any, ByVal lpFileName As String) As Long
Private Declare Function Shell_NotifyIcon Lib "shell32.dll" Alias "Shell_NotifyIconA" (ByVal dwMessage As Long, lpData As NOTIFYICONDATA) As Long
Private Declare Function CallWindowProc Lib "user32" Alias "CallWindowProcA" (ByVal lpPrevWndFunc As Long, ByVal HWnd As Long, ByVal Msg As Long, ByVal wParam As Long, ByVal lParam As Long) As Long

Public Type LASTINPUTINFO
    cbSize   As Long
    dwTime   As Long
End Type
Public Type POINTAPI
          X   As Long
          Y   As Long
End Type
Public Type NOTIFYICONDATA
    cbSize As Long
    HWnd As Long
    Uid As Long
    UFlags As Long
    UCallbackMessage As Long
    HIcon As Long
    SzTip As String * 64
End Type

Public OldWindowProc As Long
Public Const WM_USER = &H400
Public Const WM_LBUTTONUP = &H202
Public Const WM_MBUTTONUP = &H208
Public Const WM_RBUTTONUP = &H205
Public Const TRAY_CALLBACK = (WM_USER + 1001&)
Public Const GWL_WNDPROC = (-4)
Public Const GWL_USERDATA = (-21)
Public Const NIF_ICON = &H2
Public Const NIF_TIP = &H4
Public Const NIM_ADD = &H0
Public Const NIF_MESSAGE = &H1
Public Const NIM_MODIFY = &H1
Public Const NIM_DELETE = &H2

Private TheData As NOTIFYICONDATA

Public Const GWL_EXSTYLE = (-20)
Public Const GWL_STYLE = (-16)
Public Const WS_EX_LAYERED = &H80000
Public Const LWA_ALPHA = &H2
Public Const LWA_COLORKEY = &H1
Public Const WM_SYSCOMMAND = &H112
Public Const WM_NCLBUTTONDOWN = &HA1
Public Const HTCAPTION = 2
Public Const SWP_NOMOVE = &H2
Public Const SWP_NOSIZE = &H1

Public Died As Boolean
Public Lastinput_ As LASTINPUTINFO
Public Apppath As String, SWFPath As String
Public DispTIP As Boolean
Public Hide_L As Boolean, Hide_R As Boolean, TIPSHOW As Boolean, MenuSHOW As Boolean, DROP_DOWN As Boolean
Public CLOSE_ As Boolean, LastTIME As String
Public WaitI As Integer, Sleep_ As Integer, DROPI As Integer
Public RndSWFI As Integer, RndSWFS As String
Public lastpoint As POINTAPI
Public tip_SEL_OK As Boolean, Tip_Type As Integer
Public user_id As String, user_name As String


Public Function GetIniStr(ByVal AppName As String, ByVal In_Key As String) As String
On Error GoTo GetIniStrErr
If VBA.Trim(In_Key) = "" Then
   GoTo GetIniStrErr
End If
Dim GetStr As String
GetStr = VBA.String(128, 0)
 GetPrivateProfileString AppName, In_Key, "", GetStr, 256, Apppath & "\SET.ini"
  GetStr = VBA.Replace(GetStr, VBA.Chr(0), "")
If GetStr = "" Then
   GoTo GetIniStrErr
Else
   GetIniStr = GetStr
   GetStr = ""
End If
Exit Function
GetIniStrErr:
   Err.Clear
   GetIniStr = ""
   GetStr = ""
End Function

Public Function WriteIniStr(ByVal AppName As String, ByVal In_Key As String, ByVal In_Data As String) As Boolean
On Error GoTo WriteIniStrErr
WriteIniStr = True
If VBA.Trim(In_Data) = "" Or VBA.Trim(In_Key) = "" Or VBA.Trim(AppName) = "" Then
   GoTo WriteIniStrErr
Else
 WritePrivateProfileString AppName, In_Key, In_Data, Apppath & "\SET.ini"
End If
Exit Function
WriteIniStrErr:
   Err.Clear
   WriteIniStr = False
End Function



Public Sub sSetFormRegion(ByVal objForm As Form, ByVal lTransparentColor As Long)
    Dim hRegion   As Long
    Dim lWinStyle As Long
        lWinStyle = GetWindowLong(objForm.HWnd, GWL_EXSTYLE)
        lWinStyle = lWinStyle Or WS_EX_LAYERED
        SetWindowLong objForm.HWnd, GWL_EXSTYLE, lWinStyle
        SetLayeredWindowAttributes objForm.HWnd, lTransparentColor, 0&, LWA_COLORKEY
'    End If
    
End Sub

Public Sub SHOWTIP_(TipS_ As String, type_ As Integer)
        If DispTIP = False Then Exit Sub
        Tip_Type = type_
        F_Tip.L_Tip.Caption = TipS_
        F_Tip.SHOWI = 1
        F_Tip.Left = F_MAIN.Left - 400
        F_Tip.Top = F_MAIN.Top - F_Tip.Height + 50
        tip_SEL_OK = False
        If Tip_Type < 2 Then
            F_Tip.Cmd_No.Visible = False
            F_Tip.Cmd_OK.Left = F_Tip.Width \ 2 - F_Tip.Cmd_OK.Width \ 2
        Else
            F_Tip.Cmd_OK.Left = 885
            F_Tip.Cmd_No.Visible = True
        End If
        If Tip_Type = 2 Then F_Tip.Cmd_No.Default = True Else F_Tip.Cmd_OK.Default = True
        F_Tip.Timer_Exit.Enabled = True
        F_Tip.Visible = True
        TIPSHOW = True
End Sub

Public Sub showMenu_()
    F_Menu.Show
    F_Menu.SetFocus
    MenuSHOW = True
End Sub

Public Function NewWindowProc(ByVal HWnd As Long, ByVal Msg As Long, ByVal wParam As Long, ByVal lParam As Long) As Long
    If Msg = TRAY_CALLBACK Then
        If lParam = WM_LBUTTONUP Then
            If MenuSHOW Then Unload F_Menu
            Exit Function
        End If
        If lParam = WM_RBUTTONUP Then
            F_Menu.Top = Screen.Height - F_Menu.Height - 400
            GetCursorPos lastpoint
            F_Menu.Left = (lastpoint.X - 40) * Screen.TwipsPerPixelX
            showMenu_
            Exit Function
        End If
    End If
    NewWindowProc = CallWindowProc(OldWindowProc, HWnd, Msg, wParam, lParam)
End Function

Public Sub AddToTray(frm As Form)
    OldWindowProc = SetWindowLong(frm.HWnd, GWL_WNDPROC, AddressOf NewWindowProc)
    With TheData
        .Uid = 0
        .HWnd = frm.HWnd
        .SzTip = "(" & user_id & ")" & user_name & vbNullChar
        .cbSize = Len(TheData)
        .HIcon = F_MAIN.ImageList.ListImages(2).Picture.Handle
        .UFlags = NIF_ICON
        .UCallbackMessage = TRAY_CALLBACK
        .UFlags = .UFlags Or NIF_MESSAGE Or NIF_TIP
        .cbSize = Len(TheData)
    End With
    Shell_NotifyIcon NIM_ADD, TheData
End Sub

Public Sub RemoveFromTray()
    With TheData
        .UFlags = 0
    End With
    Shell_NotifyIcon NIM_DELETE, TheData
    SetWindowLong F_MAIN.HWnd, GWL_WNDPROC, OldWindowProc
End Sub

Public Sub SetTrayIcon(pic As Picture)
    If pic.Type <> vbPicTypeIcon Then Exit Sub
    With TheData
        .HIcon = pic.Handle
        .UFlags = NIF_ICON
    End With
    Shell_NotifyIcon NIM_MODIFY, TheData
End Sub
