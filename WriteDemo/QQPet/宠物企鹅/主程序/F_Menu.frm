VERSION 5.00
Object = "{831FDD16-0C5C-11D2-A9FC-0000F8754DA1}#2.0#0"; "MSCOMCTL.OCX"
Begin VB.Form F_Menu 
   BackColor       =   &H00FFFFFF&
   BorderStyle     =   0  'None
   Caption         =   "Form1"
   ClientHeight    =   1695
   ClientLeft      =   0
   ClientTop       =   0
   ClientWidth     =   1365
   LinkTopic       =   "Form1"
   ScaleHeight     =   1695
   ScaleWidth      =   1365
   ShowInTaskbar   =   0   'False
   StartUpPosition =   3  '窗口缺省
   Begin MSComctlLib.ImageList ImageL 
      Left            =   0
      Top             =   0
      _ExtentX        =   1005
      _ExtentY        =   1005
      BackColor       =   -2147483643
      ImageWidth      =   61
      ImageHeight     =   21
      MaskColor       =   12632256
      UseMaskColor    =   0   'False
      _Version        =   393216
      BeginProperty Images {2C247F25-8591-11D1-B16A-00C0F0283628} 
         NumListImages   =   2
         BeginProperty ListImage1 {2C247F27-8591-11D1-B16A-00C0F0283628} 
            Picture         =   "F_Menu.frx":0000
            Key             =   ""
         EndProperty
         BeginProperty ListImage2 {2C247F27-8591-11D1-B16A-00C0F0283628} 
            Picture         =   "F_Menu.frx":0F6A
            Key             =   ""
         EndProperty
      EndProperty
   End
   Begin VB.Label LB_M 
      Alignment       =   2  'Center
      BackStyle       =   0  'Transparent
      Caption         =   "宠物表演"
      Height          =   240
      Index           =   0
      Left            =   225
      MouseIcon       =   "F_Menu.frx":1ED4
      MousePointer    =   99  'Custom
      TabIndex        =   0
      Top             =   630
      Width           =   795
   End
   Begin VB.Label LB_M 
      Alignment       =   2  'Center
      BackStyle       =   0  'Transparent
      Caption         =   "宠物退出"
      Height          =   225
      Index           =   1
      Left            =   225
      MouseIcon       =   "F_Menu.frx":2B9E
      MousePointer    =   99  'Custom
      TabIndex        =   1
      Top             =   1095
      Width           =   795
   End
   Begin VB.Image Image2 
      Height          =   315
      Index           =   1
      Left            =   150
      Picture         =   "F_Menu.frx":3868
      Top             =   1035
      Width           =   915
   End
   Begin VB.Image Image2 
      Height          =   315
      Index           =   0
      Left            =   150
      Picture         =   "F_Menu.frx":47C2
      Top             =   570
      Width           =   915
   End
   Begin VB.Image Image1 
      Height          =   1635
      Left            =   0
      Picture         =   "F_Menu.frx":571C
      Top             =   0
      Width           =   1185
   End
End
Attribute VB_Name = "F_Menu"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub Form_Deactivate()
Unload Me
End Sub

Private Sub Form_Load()
    LB_M(0).Enabled = Not (Hide_L Or Hide_R)
    Me.BackColor = vbMagenta
    Call sSetFormRegion(Me, vbMagenta)
    DoEvents
    Refresh
End Sub

Private Sub Form_Unload(Cancel As Integer)
    MenuSHOW = False
End Sub

Private Sub LB_M_Click(Index As Integer)
  Select Case Index
    Case 0
        If Died Then
            SHOWTIP_ " 您的宠物已被宣布死亡！" & Chr(13) & Chr(13) & "     是否重新救活？", 3
            Exit Sub
        End If
        If F_MAIN.SW.FrameNum = -1 Or F_MAIN.SW.FrameNum = F_MAIN.SW.TotalFrames - 1 Then
            F_MAIN.SW.Movie = SWFPath & "102\" & F_MAIN.List_DZ.List(Rnd * F_MAIN.List_DZ.ListCount) & ".SWF"
        End If
    Case 1
        If Died = False Then
            SHOWTIP_ "   真的要让我走吗？" & Chr(13) & Chr(13) & IIf(Rnd * 3 Mod 2 = 0, " 你会不会想我啊？", IIf(Rnd * 3 Mod 2 = 0, " 你是不是要下班啦！", "   那我真的走了？？")), 2
        Else
            CLOSE_ = True
            F_MAIN.T_Close.Enabled = True
        End If
  End Select
  Unload Me
End Sub

Private Sub LB_M_MouseDown(Index As Integer, Button As Integer, Shift As Integer, X As Single, Y As Single)
Image2(Index).Picture = ImageL.ListImages(2).Picture
End Sub

Private Sub LB_M_MouseUp(Index As Integer, Button As Integer, Shift As Integer, X As Single, Y As Single)
Image2(Index).Picture = ImageL.ListImages(1).Picture
End Sub
