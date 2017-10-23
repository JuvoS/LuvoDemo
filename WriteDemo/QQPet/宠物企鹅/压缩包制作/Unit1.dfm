object Form1: TForm1
  Left = 192
  Top = 107
  BorderStyle = bsSingle
  ClientHeight = 66
  ClientWidth = 121
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object UnZip1: TUnZip
    CpuType = cptAuto
    Left = 8
    Top = 8
  end
  object Zip1: TZip
    Attributes = [fsZeroAttr, fsReadOnly, fsArchive, fsCompressed, fsEncrypted]
    DeleteOptions = doAllowUndo
    ArcType = atZip
    AttributesEx = []
    CompressMethod = cmDeflate
    DefaultExt = '.zip'
    StoreFilesOfType.Strings = (
      '.ACE'
      '.ARC'
      '.ARJ'
      '.BH'
      '.CAB'
      '.ENC'
      '.GZ'
      '.HA'
      '.JAR'
      '.LHA'
      '.LZH'
      '.PAK'
      '.PK3'
      '.PK_'
      '.RAR'
      '.TAR'
      '.TGZ'
      '.UUE'
      '.UU'
      '.WAR'
      '.XXE'
      '.Z'
      '.ZIP'
      '.ZOO')
    TempDir = 'D:\Temp\'
    Switch = swAdd
    Left = 56
    Top = 8
  end
  object Timer1: TTimer
    Interval = 1
    OnTimer = Timer1Timer
    Left = 88
    Top = 16
  end
end
