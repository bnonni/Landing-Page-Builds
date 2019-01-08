Sub Mobile_Optimizations(itm As Outlook.MailItem)
Dim objAtt As Outlook.Attachment
Dim saveFolder As String
Dim dateFormat

'DO NOT CHANGE
dateFormat = Format(Now, "mm.dd.yyyy")

'saves data with date for recordkeeping
nameFormat1 = Format("EHI_Mobile Optimizations Data_" & dateFormat & ".csv")
saveFolder1 = "U:\360i\ATL\Clients\Enterprise\Enterprise SAM\Conversion Practice\Tests\2018 Test\Q4 Tests\SEM City Searchers\Workspace Data"
'saves data without date to save over workbook on server for data connection
nameFormat2 = Format("EHI_Mobile Optimizations_Data Connected Workbook.csv")
saveFolder2 = "U:\360i\ATL\Clients\Enterprise\Enterprise SAM\Conversion Practice\Tests\Reporting Instructions\Data Connected Workbook"

For Each objAtt In itm.Attachments 'DO NOT CHANGE THESE
    objAtt.SaveAsFile saveFolder1 & "\" & nameFormat1
    objAtt.SaveAsFile saveFolder2 & "\" & nameFormat2
    
    Set objAtt = Nothing
Next
End Sub
