Sub II_EHI_Data_Automation(itm As Outlook.MailItem)
Dim objAtt As Outlook.Attachment
Dim saveFolder As String
Dim dateFormat
Dim strSubject As String

'DO NOT CHANGE
dateFormat = Format(Now, "mm.dd.yyyy")
strSubject = itm.Subject

If strSubject = "Adobe Analytics : A/B - City Searchers Relaunch - Brand & Category" Then
    'saves data with date for recordkeeping
    nameFormat1 = Format("EHI_City Search Relaunch Data_" & dateFormat & ".txt")
    saveFolder1 = "U:\360i\ATL\Clients\Enterprise\Enterprise SAM\Conversion Practice\Tests\2018 Test\Q4 Tests\SEM City Searchers\Workspace Data"
    'saves data without date to save over workbook on server for data connection
    nameFormat2 = Format("EHI_City Search_Data Connected Workbook.txt")
    saveFolder2 = "U:\360i\ATL\Clients\Enterprise\Enterprise SAM\Conversion Practice\Tests\Reporting Instructions\Data Connected Workbook"
    
    For Each objAtt In itm.Attachments 'DO NOT CHANGE THESE
        objAtt.SaveAsFile saveFolder1 & "\" & nameFormat1
        objAtt.SaveAsFile saveFolder2 & "\" & nameFormat2
        
        Set objAtt = Nothing
    Next
ElseIf strSubject = "Adobe Analytics : A/B - Widget Above the Fold_Vehicles Page Test_062018 #2" Then
    'saves data with date for recordkeeping
    nameFormat3 = Format("EHI_Vehicles Widget Data_" & dateFormat & ".txt")
    saveFolder3 = "U:\360i\ATL\Clients\Enterprise\Enterprise SAM\Conversion Practice\Tests\2018 Test\Q4 Tests\Booking Widget\Workspace Data"
    'saves data without date to save over workbook on server for data connection
    nameFormat4 = Format("EHI_Vehicles Widget_Data Connected Workbook.txt")
    saveFolder4 = "U:\360i\ATL\Clients\Enterprise\Enterprise SAM\Conversion Practice\Tests\Reporting Instructions\Data Connected Workbook"

    For Each objAtt In itm.Attachments
        objAtt.SaveAsFile saveFolder3 & "\" & nameFormat3
        objAtt.SaveAsFile saveFolder4 & "\" & nameFormat4
        
        Set objAtt = Nothing
    Next
ElseIf strSubject = "Adobe Analytics : A/B - Category Dynamic Lander" Then
    'saves data with date for recordkeeping
    nameFormat5 = Format("EHI_Category Dynamic LP_" & dateFormat & ".txt")
    saveFolder5 = "U:\360i\ATL\Clients\Enterprise\Enterprise SAM\Conversion Practice\Tests\2018 Test\Q4 Tests\Category Dynamic LP\Workspace Data"
    'saves data without date to save over workbook on server for data connection
    nameFormat6 = Format("EHI_Category Dynamic LP_Data Connected Workbook.txt")
    saveFolder6 = "U:\360i\ATL\Clients\Enterprise\Enterprise SAM\Conversion Practice\Tests\Reporting Instructions\Data Connected Workbook"

    For Each objAtt In itm.Attachments
        objAtt.SaveAsFile saveFolder5 & "\" & nameFormat5
        objAtt.SaveAsFile saveFolder6 & "\" & nameFormat6
        
        Set objAtt = Nothing
    Next
ElseIf strSubject = "A/B - Category Dynamic Lander (Deals/Vehicles breakout)" Then
     'saves data with date for recordkeeping
    nameFormat7 = Format("EHI_Category Dynamic LP_Deals & Vehicles_" & dateFormat & ".txt")
    saveFolder7 = "U:\360i\ATL\Clients\Enterprise\Enterprise SAM\Conversion Practice\Tests\2018 Test\Q4 Tests\Category Dynamic LP\Workspace Data"
    'saves data without date to save over workbook on server for data connection
    nameFormat8 = Format("EHI_Category Dynamic LP_Deals & Vehicles_Data Connected Workbook.txt")
    saveFolder8 = "U:\360i\ATL\Clients\Enterprise\Enterprise SAM\Conversion Practice\Tests\Reporting Instructions\Data Connected Workbook"

    For Each objAtt In itm.Attachments
        objAtt.SaveAsFile saveFolder7 & "\" & nameFormat7
        objAtt.SaveAsFile saveFolder8 & "\" & nameFormat8
        
        Set objAtt = Nothing
    Next
Else

End If
End Sub

