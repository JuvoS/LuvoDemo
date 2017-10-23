VERSION 5.00
Begin VB.Form F_Tip 
   BorderStyle     =   0  'None
   ClientHeight    =   2520
   ClientLeft      =   0
   ClientTop       =   0
   ClientWidth     =   3375
   KeyPreview      =   -1  'True
   LinkTopic       =   "Form2"
   ScaleHeight     =   2520
   ScaleWidth      =   3375
   ShowInTaskbar   =   0   'False
   Begin VB.CommandButton Cmd_No 
      Appearance      =   0  'Flat
      BackColor       =   &H00FFFFFF&
      Caption         =   "取消"
      Height          =   270
      Left            =   1740
      MouseIcon       =   "F_Tip.frx":0000
      MousePointer    =   99  'Custom
      TabIndex        =   2
      Top             =   1725
      Width           =   735
   End
   Begin VB.Timer Timer_Exit 
      Enabled         =   0   'False
      Interval        =   800
      Left            =   1455
      Top             =   1035
   End
   Begin VB.CommandButton Cmd_OK 
      Appearance      =   0  'Flat
      Caption         =   "确定"
      Height          =   270
      Left            =   885
      MouseIcon       =   "F_Tip.frx":0CCA
      MousePointer    =   99  'Custom
      TabIndex        =   1
      Top             =   1725
      Width           =   735
   End
   Begin VB.Label L_Tip 
      BackStyle       =   0  'Transparent
      ForeColor       =   &H000000C0&
      Height          =   720
      Left            =   615
      TabIndex        =   0
      Top             =   990
      Width           =   2250
      WordWrap        =   -1  'True
   End
   Begin VB.Image Image1 
      Height          =   2475
      Left            =   0
      Picture         =   "F_Tip.frx":1994
      Top             =   0
      Width           =   3375
   End
End
Attribute VB_Name = "F_Tip"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Public SHOWI As Integer

Private Sub Cmd_No_Click()
tip_SEL_OK = False
Me.Visible = False
TIPSHOW = False
End Sub

Private Sub Cmd_OK_Click()
tip_SEL_OK = OK
TIPSHOW = False
If Tip_Type = 2 Then
        CLOSE_ = True
        If CLOSE_ Then F_MAIN.SW.Movie = SWFPath & "102\1020120141.swf": F_MAIN.T_Close.Enabled = True
End If
If Tip_Type = 3 Then
    Died = False
    WriteIniStr user_id, "DIED", "FALSE"
    F_MAIN.SW.Movie = SWFPath & "102\1022090141.swf"
End If
Me.Visible = False
End Sub


Private Sub Form_Initialize()
    Me.BackColor = vbMagenta
    Call sSetFormRegion(Me, vbMagenta)
    SetWindowPos Me.HWnd, True, _
        (F_MAIN.Left) / Screen.TwipsPerPixelX, (F_MAIN.Top) / Screen.TwipsPerPixelY - 130, _
        Image1.Width / Screen.TwipsPerPixelX, Image1.Height / Screen.TwipsPerPixelY, SWP_NOSIZE
End Sub

Private Sub Timer_Exit_Timer()
    SHOWI = SHOWI + 1
    If SHOWI > 8 Then
        Timer_Exit.Enabled = False
        SHOWI = 0
        tip_SEL_OK = False
        TIPSHOW = False
        Me.Visible = False
    End If
End Sub
