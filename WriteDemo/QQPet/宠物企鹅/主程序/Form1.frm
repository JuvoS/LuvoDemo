VERSION 5.00
Object = "{D27CDB6B-AE6D-11CF-96B8-444553540000}#1.0#0"; "flash8a.ocx"
Object = "{831FDD16-0C5C-11D2-A9FC-0000F8754DA1}#2.0#0"; "Mscomctl.ocx"
Begin VB.Form F_MAIN 
   BackColor       =   &H00505050&
   BorderStyle     =   0  'None
   Caption         =   "THIS IS A SWF_F"
   ClientHeight    =   2535
   ClientLeft      =   0
   ClientTop       =   0
   ClientWidth     =   2685
   Icon            =   "Form1.frx":0000
   KeyPreview      =   -1  'True
   NegotiateMenus  =   0   'False
   ScaleHeight     =   2535
   ScaleWidth      =   2685
   ShowInTaskbar   =   0   'False
   Begin VB.Timer Timer_DZ 
      Enabled         =   0   'False
      Interval        =   800
      Left            =   1695
      Top             =   585
   End
   Begin VB.Timer Timer_DROP 
      Enabled         =   0   'False
      Interval        =   100
      Left            =   1725
      Top             =   60
   End
   Begin VB.Timer Timer_Down 
      Enabled         =   0   'False
      Interval        =   300
      Left            =   120
      Top             =   690
   End
   Begin VB.Timer Timer_Next 
      Enabled         =   0   'False
      Interval        =   100
      Left            =   1140
      Top             =   795
   End
   Begin VB.ListBox List_LGDZ 
      Height          =   960
      ItemData        =   "Form1.frx":08CA
      Left            =   1770
      List            =   "Form1.frx":0916
      TabIndex        =   3
      Top             =   1785
      Visible         =   0   'False
      Width           =   1740
   End
   Begin VB.ListBox List_DZ 
      Height          =   1860
      ItemData        =   "Form1.frx":0A52
      Left            =   360
      List            =   "Form1.frx":0AE6
      TabIndex        =   2
      Top             =   1785
      Visible         =   0   'False
      Width           =   1905
   End
   Begin VB.Timer T_AUTO 
      Interval        =   1000
      Left            =   1065
      Top             =   270
   End
   Begin VB.Timer T_Close 
      Enabled         =   0   'False
      Interval        =   100
      Left            =   540
      Top             =   225
   End
   Begin MSComctlLib.ImageList ImageList 
      Left            =   0
      Top             =   0
      _ExtentX        =   1005
      _ExtentY        =   1005
      BackColor       =   -2147483643
      ImageWidth      =   16
      ImageHeight     =   16
      MaskColor       =   13030622
      _Version        =   393216
      BeginProperty Images {2C247F25-8591-11D1-B16A-00C0F0283628} 
         NumListImages   =   3
         BeginProperty ListImage1 {2C247F27-8591-11D1-B16A-00C0F0283628} 
            Picture         =   "Form1.frx":0D2A
            Key             =   ""
         EndProperty
         BeginProperty ListImage2 {2C247F27-8591-11D1-B16A-00C0F0283628} 
            Picture         =   "Form1.frx":12C4
            Key             =   ""
         EndProperty
         BeginProperty ListImage3 {2C247F27-8591-11D1-B16A-00C0F0283628} 
            Picture         =   "Form1.frx":185E
            Key             =   ""
         EndProperty
      EndProperty
   End
   Begin VB.Label LB_FRONT 
      BackStyle       =   0  'Transparent
      Height          =   2460
      Left            =   30
      TabIndex        =   1
      Top             =   45
      Width           =   2625
   End
   Begin ShockwaveFlashObjectsCtl.ShockwaveFlash SW 
      Height          =   2505
      Left            =   0
      TabIndex        =   0
      Top             =   0
      Width           =   2655
      _cx             =   4683
      _cy             =   4419
      FlashVars       =   ""
      Movie           =   "E:\1 02\1020000141.swf"
      Src             =   "E:\1 02\1020000141.swf"
      WMode           =   "Transparent"
      Play            =   0   'False
      Loop            =   0   'False
      Quality         =   "High"
      SAlign          =   ""
      Menu            =   0   'False
      Base            =   ""
      AllowScriptAccess=   ""
      Scale           =   "ShowAll"
      DeviceFont      =   0   'False
      EmbedMovie      =   0   'False
      BGColor         =   ""
      SWRemote        =   ""
      MovieData       =   ""
      SeamlessTabbing =   -1  'True
      Profile         =   0   'False
      ProfileAddress  =   ""
      ProfilePort     =   0
   End
End
Attribute VB_Name = "F_MAIN"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit

Private Sub Form_Initialize()
  Dim ipx As Long
  Dim str_SS As String
  Dim i As Integer
  On Error GoTo Exit_
  Apppath = App.Path
  If Right(Apppath, 1) <> "\" Then Apppath = Apppath & "\"
  str_SS = Command
  If Trim(str_SS) = "" Then
    user_id = "8888"
    user_name = "天才sedwen"
    'End                                            '这里可以做成无命令行,则直接退出
  Else
    i = InStr(1, str_SS, "USER")
    If i > 0 Then user_id = Mid(str_SS, i + 4, 4)
    i = InStr(1, str_SS, "NAME")
    If i > 0 Then user_name = Trim(Mid(str_SS, i + 4, 8))
  End If
  If Dir(Apppath & "Set.ini") = "" Then End: Exit Sub
  SWFPath = Apppath
  If Trim(SWFPath) <> "" Then SWFPath = SWFPath & IIf(Right(SWFPath, 1) <> "\", "\", "")
  DispTIP = IIf(GetIniStr("QQP", "DISPTIP") = "1", True, False)
  str_SS = Trim(GetIniStr(user_id, "LASTPOINT"))
  If str_SS <> "" Then
    lastpoint.X = Left(str_SS, InStr(1, str_SS, ",") - 1)
    lastpoint.Y = Mid(str_SS, InStr(1, str_SS, ",") + 1, Len(str_SS) - InStr(1, str_SS, ","))
  End If
  If Dir(SWFPath) = "" Then End: Exit Sub
  '这里放解压102/103        102公企鹅,103母企鹅
  If Dir(SWFPath & "102\") = "" Then
    If (Dir(Apppath & "UnZip.Exe") <> "") And (Dir(Apppath & "102.r") <> "") Then
        Shell Apppath & "Unzip.exe " & Apppath & "102.r", vbHide
        While ipx < 65535 And (Dir(Apppath & "OK.ELR") = "")
            ipx = ipx + 1
            DoEvents
        Wend
        If Dir(Apppath & "OK.ELR") = "" Then End: Exit Sub
    End If
  End If
  If lastpoint.X = 0 Then
    lastpoint.X = (Screen.Width / 2 - SW.Width / 2) / Screen.TwipsPerPixelX - 50
    lastpoint.Y = (Screen.Height / Screen.TwipsPerPixelX) - 140
  End If
  Died = IIf(GetIniStr(user_id, "DIED") = "", False, IIf(GetIniStr(user_id, "DIED") = "TRUE", True, False))
    SetWindowPos Me.HWnd, True, _
        lastpoint.X, lastpoint.Y, SW.Width, SW.Height, SWP_NOSIZE
    Me.BackColor = &H505050
    If Died = False Then
        SW.Movie = SWFPath & "102\1020110141.swf"
    Else
        SW.Movie = SWFPath & "102\1020000541.swf"
        SHOWTIP_ "由于照顾不周，您的宠物已死亡！" & Chr(13) & Chr(13) & "   请及时救活！", 1
    End If
    Call sSetFormRegion(Me, &H505050)
    DoEvents
    Randomize
    If Dir(Apppath & user_id & "QQPTODZ.LS") <> "" Then Kill Apppath & user_id & "QQPTODZ.LS"
    If Died = False Then SHOWTIP_ " Ｈi," & user_name & IIf(Rnd * 3 Mod 2 = 0, ",我回来了！", ",我来也！！") & Chr(13) & IIf(Rnd * 3 Mod 2 = 0, "有没有想我呀？我想死你了！", Chr(13) & " 想我了吧？呵呵  ^_^ "), 1
    AddToTray Me
    LastTIME = Format(Now, "MMDDHHNNSS")
    WriteIniStr user_id, "LASTTIME", LastTIME
    Timer_DZ.Enabled = True
    Exit Sub
Exit_:
    'MsgBox Err.Description
    End
End Sub

Private Sub LB_FRONT_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
If CLOSE_ Then Exit Sub
If Button = 1 Then
    If Hide_L = False And Hide_R = False Then
        If TIPSHOW Then F_Tip.Visible = False
        If Timer_DROP.Enabled = False And Timer_Down.Enabled = False Then DROPI = 0: DROP_DOWN = False
        T_AUTO.Enabled = False
        If Timer_Next.Enabled = False Then Timer_DROP.Enabled = True
        Timer_Down.Enabled = False
        DROP_DOWN = True
        Call ReleaseCapture
        Call SendMessage(Me.HWnd, WM_NCLBUTTONDOWN, HTCAPTION, 0&)
        If Died Then Exit Sub
        If DROPI >= 5 And DROP_DOWN Then
            Timer_DROP.Enabled = False
            Timer_Down.Enabled = True
            Exit Sub
        Else
            DROP_DOWN = False
            DROPI = 0
            Timer_DROP.Enabled = False
        End If
        T_AUTO.Enabled = True
        'DROP_DOWN = False
        If TIPSHOW Then
            F_Tip.Left = Me.Left - 45 * Screen.TwipsPerPixelX
            F_Tip.Top = Me.Top - 130 * Screen.TwipsPerPixelY
            F_Tip.Visible = True
        End If
    End If
End If
If Button = 2 Then
    If Hide_L Or Hide_R Or Timer_Down.Enabled Then Exit Sub
    If Me.Left - F_Menu.Width - 800 < 0 Then F_Menu.Left = Me.Left + 2000 Else If Me.Left > Screen.Width - Me.Width - 1000 Then F_Menu.Left = Me.Left - Me.Width + 2000 Else F_Menu.Left = Me.Left + 2000
    If Me.Top < 0 Then F_Menu.Top = 0 Else If Me.Top > Screen.Height - Me.Height Then F_Menu.Top = Screen.Height - Me.Height Else F_Menu.Top = Me.Top
    Call showMenu_
End If
End Sub

Private Sub LB_FRONT_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
  Dim Pos1      As POINTAPI
  Dim pos2      As POINTAPI
  Static Out    As Boolean

  Out = False
  If DROP_DOWN Or CLOSE_ Then Exit Sub
  If Hide_L Or Hide_R Then              '处于隐藏状态
    If Button = 1 Then              '用鼠标拖出
        If Hide_L Then Hide_L = False: Left = 2: SW.Movie = SWFPath & "102\1020080641.SWF"
        If Hide_R Then Hide_R = False: Left = Screen.Width - Me.Width - 2: SW.Movie = SWFPath & "102\1020081741.SWF"
        Exit Sub
    Else
        If Hide_L Then SW.Movie = SWFPath & "102\1020080421.SWF"
        If Hide_R Then SW.Movie = SWFPath & "102\1020081421.SWF"
    End If
  End If
  Do While Out = False
    GetCursorPos Pos1
    pos2.X = Pos1.X:       pos2.Y = Pos1.Y
    ScreenToClient Me.HWnd, pos2
    If pos2.X < 0 Or pos2.Y < 0 Or pos2.X > Me.Width / Screen.TwipsPerPixelX Or pos2.Y > Me.Height / Screen.TwipsPerPixelY Then                         '判断鼠标是否仍在按钮的范围内
        Out = True                  '鼠标移出了,如果处于边线则隐藏
        If Hide_L Then SW.Movie = SWFPath & "102\1020080531.SWF"
        If Hide_R Then SW.Movie = SWFPath & "102\1020081531.SWF"
        Exit Do
    End If
    DoEvents
  Loop
End Sub

Private Sub SW_OnReadyStateChange(newState As Long)
    SW.Play
    SW.Loop = False
    If Hide_L Then Left = -50
    If Hide_R Then Left = Screen.Width - Me.Width + 70
End Sub

Private Sub T_Close_Timer()
If CLOSE_ Then
    If T_AUTO.Enabled Then
        If Died = False Then SHOWTIP_ user_name & IIf(Rnd * 3 Mod 2 = 0, ",我先走了！" & Chr(13) & Chr(13) & "  呆会见，ByeBye！ ", ",我回去睡觉了！" & Chr(13) & Chr(13) & " 记得叫醒我哦！！"), 1
        SetTrayIcon ImageList.ListImages(3).Picture
    End If
    T_AUTO.Enabled = False
    If (SW.FrameNum = SW.TotalFrames - 1) Then
        RemoveFromTray
        lastpoint.X = Left / Screen.TwipsPerPixelX
        lastpoint.Y = Top / Screen.TwipsPerPixelX
        WriteIniStr user_id, "LASTPOINT", lastpoint.X & "," & lastpoint.Y
        End
    End If
End If
End Sub

Private Sub T_AUTO_Timer()
Dim s_Aut As Integer
  If Hide_L Or Hide_R Or CLOSE_ Then Exit Sub
    SetTrayIcon ImageList.ListImages((Rnd * 3 Mod 2) + 1).Picture
    Lastinput_.cbSize = Len(Lastinput_)
    GetLastInputInfo Lastinput_
    If Sleep_ > 0 And GetTickCount - Lastinput_.dwTime < 150000 Then
        If Sleep_ > 1 Then SW.Movie = SWFPath & "102\1020041331.SWF": SHOWTIP_ user_name & "，你终于回来了！" & Chr(13) & " 等你等到" & IIf(Rnd * 3 Mod 2 = 0, "黄花菜凉了", "花都谢了！"), 1 Else SW.Movie = SWFPath & "102\1020000141.SWF"
        Sleep_ = 0
        Exit Sub
    End If
    If GetTickCount - Lastinput_.dwTime > 120000 And Sleep_ = 5 Then
        SHOWTIP_ user_name & "，你再不来，我就要死了！#%$*&@-=...", 1
        SW.Movie = SWFPath & "102\1022060341.SWF"
        SW.Loop = True
        Sleep_ = 6
    End If
    If GetTickCount - Lastinput_.dwTime > 140000 And Sleep_ = 6 Then
        SW.Movie = SWFPath & "102\1022080141.SWF"
        Sleep_ = 7
    End If
    If GetTickCount - Lastinput_.dwTime > 150000 And Sleep_ = 7 Then
        SW.Movie = SWFPath & "102\1022110141.SWF"
        Died = True
        WriteIniStr user_id, "DIED", "TRUE"
        Sleep_ = 8
    End If
    If Sleep_ = 8 And SW.Playing = False Then SW.Movie = SWFPath & "102\1020000541.SWF"
    If Sleep_ >= 5 Or Died Then Exit Sub
  If SW.FrameNum = -1 Then SW.Movie = SWFPath & "102\1020000141.SWF"
  If SW.Playing = False Or Sleep_ = 4 Then
    If Left < -470 Then
        Hide_L = True
        SW.Movie = SWFPath & "102\1020080141.SWF"
        Exit Sub
    End If
    If Left > Screen.Width - Me.Width + 650 Then
        Hide_R = True
        SW.Movie = SWFPath & "102\1020081141.SWF"
        Exit Sub
    End If
    If GetTickCount - Lastinput_.dwTime > 40000 And Sleep_ = 0 Then SHOWTIP_ user_name & "，你去哪了，怎么不陪我玩啊？" & Chr(13) & "　我一个人好无聊啊！", 1
    If GetTickCount - Lastinput_.dwTime > 40000 And Sleep_ = 0 Then SW.Movie = SWFPath & "102\1020030311.SWF": Sleep_ = 1
    If GetTickCount - Lastinput_.dwTime > 42000 And Sleep_ = 1 Then SW.Movie = SWFPath & "102\1020041111.SWF": Sleep_ = 2
    If GetTickCount - Lastinput_.dwTime > 44000 And Sleep_ = 2 Then SW.Movie = SWFPath & "102\1020041221.SWF": Sleep_ = 3
    If GetTickCount - Lastinput_.dwTime > 46000 And Sleep_ = 3 Then SW.Movie = SWFPath & "102\1020041421.SWF": Sleep_ = 4: SW.Loop = True
    If GetTickCount - Lastinput_.dwTime > 70000 And Sleep_ = 4 Then SW.Movie = SWFPath & "102\1020041521.SWF": Sleep_ = 5: SW.Loop = True
    
    If Sleep_ > 0 Then Exit Sub
    WaitI = WaitI + 1
    If (WaitI Mod 8) = 0 Then
        SW.Movie = SWFPath & "102\1020010141.SWF"
        SW.Play
        Exit Sub
    End If
    If (WaitI Mod 53) = 0 Then
        If Rnd * 3 Mod 2 = 1 Then
            SHOWTIP_ user_name & IIf(Rnd * 3 Mod 2 = 1, "，我告诉你一个好消息哦！你买的股票涨了，快去看看！！", "，你怎么不陪我玩啊？"), 1
        Else
            SHOWTIP_ user_name & IIf(Rnd * 3 Mod 2 = 1, ",我刚学了一首歌,要不要唱给你听啊？", ",你再不理我的话,哼,我就~~~~~和你绝交！"), 1
        End If
    End If
    If (WaitI Mod 45) = 0 Then
        s_Aut = Rnd * List_DZ.ListCount
        If Dir(SWFPath & "102\" & List_DZ.List(s_Aut) & ".SWF") <> "" Then
            If List_DZ.List(s_Aut) = "1022070241" Then SHOWTIP_ "变变变，看我大显神威，我帅～～～～", 1
            If List_DZ.List(s_Aut) = "1023160141" Then SHOWTIP_ "哇晒，挣到了，我天生就是食家。呵呵!~~", 1
            If List_DZ.List(s_Aut) = "1022040141" Then SHOWTIP_ "我要洗澡去了，洗涮涮~~洗涮涮~~", 1
            SW.Movie = SWFPath & "102\" & List_DZ.List(s_Aut) & ".SWF"
            Exit Sub
        End If
    End If
    If (WaitI Mod 63) = 0 Then
        Timer_Next.Enabled = True
        Exit Sub
    End If
  End If
End Sub

Private Sub Timer_Down_Timer()
Dim ix As Integer
Timer_DROP.Enabled = False
While Me.Top < Screen.Height - Me.Height - 200
    If SW.Movie <> SWFPath & "102\1028010331.SWF" Then SW.Movie = SWFPath & "102\1028010331.SWF"
    ix = ix + 1
    If (ix Mod 35) = 0 Then Me.Top = Me.Top + 2: ix = 0
    DoEvents
Wend
Me.Top = Screen.Height - Me.Height - 200
If Timer_Down.Enabled = False Then Exit Sub
If Rnd * 4 Mod 2 = 0 Then SHOWTIP_ "唉呀，想摔死我啊！" & Chr(13) & Chr(13) & IIf(Rnd * 3 Mod 2 = 0, "你太没良心了！！！", "    呜 呜 ~~~~~"), 1
SW.Movie = SWFPath & "102\1028020141.SWF"
Timer_Down.Enabled = False
T_AUTO.Enabled = True
DROPI = 0
DROP_DOWN = False
End Sub

Private Sub Timer_DROP_Timer()
If DROP_DOWN = False Then Exit Sub
If SW.FrameNum <> SW.TotalFrames - 1 Then Exit Sub
    DROPI = DROPI + 1
    If DROPI = 5 Then
        SW.Movie = SWFPath & "102\1028010111.SWF"
        SW.Play
        Exit Sub
    Else
        If DROPI > 5 Then DROP_DOWN = True: SW.Movie = SWFPath & "102\1028010221.SWF": SW.Loop = True: Timer_DROP.Enabled = False
    End If
End Sub

Private Sub Timer_DZ_Timer()
Dim rec_Str_S As String, Str_S As String
On Error GoTo ERR_GetData
Timer_DZ.Enabled = False
If GetIniStr(user_id, "LASTTIME") <> LastTIME Then
    RemoveFromTray
    End
    Exit Sub
End If
    If Dir(Apppath & user_id & "QQPTODZ.LS") = "" Then GoTo ERR_GetData
    Open Apppath & user_id & "QQPTODZ.LS" For Input Shared As #511
    Line Input #511, rec_Str_S
    Close #511
    Kill Apppath & user_id & "QQPTODZ.LS"
    If Trim(rec_Str_S) = "" Then GoTo ERR_GetData
    If rec_Str_S = "CLOSE WINDOW" Then
        CLOSE_ = True
        SW.Movie = SWFPath & "102\1020120141.swf"
        T_Close.Enabled = True
        GoTo ERR_GetData
    End If
    If Left(rec_Str_S, 4) = "OPRA" Then
        Str_S = Trim(Mid(rec_Str_S, 5, Len(rec_Str_S) - 4))
        If Dir(SWFPath & Str_S & ".SWF") <> "" Then SW.Movie = SWFPath & Str_S & ".SWF"
    End If
ERR_GetData:
Timer_DZ.Enabled = True
End Sub

Private Sub Timer_Next_Timer()
  If Hide_L Or Hide_R Then Exit Sub
  If SW.Playing Then Exit Sub
  If RndSWFI = 0 And RndSWFS = "" Then RndSWFI = -1
  If RndSWFI + 1 >= List_LGDZ.ListCount Then
    RndSWFI = -1
    RndSWFS = ""
    Timer_Next.Enabled = False
    Exit Sub
  Else
    If RndSWFS = "" Then
        RndSWFI = RndSWFI + 1
        RndSWFS = List_LGDZ.List(RndSWFI)
    Else
        If Left(List_LGDZ.List(RndSWFI + 1), 1) = Left(RndSWFS, 1) Then
            RndSWFI = RndSWFI + 1
            RndSWFS = List_LGDZ.List(RndSWFI)
        Else
            Timer_Next.Enabled = False
            RndSWFS = ""
            Exit Sub
        End If
    End If
    If (RndSWFS <> "") And Dir(SWFPath & "102\" & Mid(RndSWFS, 2, Len(RndSWFS) - 1) & ".SWF") <> "" Then
        If Mid(RndSWFS, 2, Len(RndSWFS) - 1) = "1020050221" Then
            If Rnd * 3 Mod 2 = 0 Then
                SHOWTIP_ IIf(Rnd * 3 Mod 2 = 1, "男人哭吧哭吧不是罪，尝尝...&*$@#￥,嘻嘻!!不错吧", "你是我的玫瑰，你是我的花... ...，下面到你唱了！"), 1
            Else
                SHOWTIP_ IIf(Rnd * 3 Mod 2 = 0, "啦~啦~啦~，我想念你的好，想念你的....一起唱！啊噢~~~", "呼啦啦~~呼啦啦~~~呼啦呼啦嘿，你不会唱就学我啊！啊噢~~~"), 1
            End If
        End If
        If Mid(RndSWFS, 2, Len(RndSWFS) - 1) = "1029210111" Then SHOWTIP_ user_name & IIf(Rnd * 3 Mod 2 = 0, ",我帅吧，嘻嘻！   天下像我这么帅的，估计找不到了吧？", ",你们拍吧,长得帅不是我的错，嘻嘻！！！"), 1
        If Mid(RndSWFS, 2, Len(RndSWFS) - 1) = "1020051611" Then SHOWTIP_ user_name & IIf(Rnd * 3 Mod 2 = 0, ",你再不帮我找对象，我就醉死算了！", "，人事间最痛苦的事，莫过于我长得太帅而找不到对象。"), 1
        If Mid(RndSWFS, 2, Len(RndSWFS) - 1) = "1020050611" Then SHOWTIP_ user_name & IIf(Rnd * 3 Mod 2 = 0, ",你没事干的话，可以陪我钓鱼啊，我技术....，嘿嘿~~~~！", ",钓鱼可以陶冶情操,这你都不懂。唉,跟你说这个是对牛弹情！"), 1
        If Mid(RndSWFS, 2, Len(RndSWFS) - 1) = "1020051021" Then SHOWTIP_ IIf(Rnd * 3 Mod 2 = 0, "鱼儿水中游~~~~。我钓～～～！呀！这些鱼还真是不听话！", "天哪，这些鱼知道我的厉害，都不敢靠近了，呵呵 ^_^ "), 1
        SW.Movie = SWFPath & "102\" & Mid(RndSWFS, 2, Len(RndSWFS) - 1) & ".SWF"
    End If
   End If
End Sub

