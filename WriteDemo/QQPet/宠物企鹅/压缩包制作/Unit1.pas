unit Unit1;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, ztvBase, ztvZip, ztvregister, ztvUnZip, ExtCtrls;

type
  TForm1 = class(TForm)
    UnZip1: TUnZip;
    Zip1: TZip;
    Timer1: TTimer;
    procedure Timer1Timer(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;
  STR_:String;
implementation

{$R *.dfm}

procedure TForm1.Timer1Timer(Sender: TObject);
var
	i:integer;
begin
Timer1.Enabled:=false;
Hide;
Str_:='';
if paramcount<=0 then Application.Terminate;
For I:=1 to ParamCount do
If Trim(ParamStr(i))<>'' then STR_:=Trim(UpperCase(ParamStr(i)));
If (Str_<>'') And (FileExists(Str_)=True) then
Begin
   	 If DirectoryExists(ExtractFilePath(Str_)+'\102\')=false then MkDIR(ExtractFilePath(Str_)+'\102\');
      Unzip1.ArchiveFile:=Str_;
      Unzip1.FileSpec.Add('*.*');
      Unzip1.ExtractDir:=ExtractFilePath(Str_)+'\102\';
      Try
      	Unzip1.Extract;
          Copyfile(Pchar(ExtractFilePath(Str_)+'\QQP.Exe'),Pchar(ExtractFilePath(Str_)+'\OK.ELR'),True);
      Except end;
End;
Application.Terminate;
end;

end.
