//ctrl+p//
Sub FindandReplaceERAC_US()
    Dim xFindArray As Variant
    Dim xFindElement As Variant
    
    Dim xRepArray As Variant
    Dim xRepElement As Variant
    
    Dim xRg As Range
    Dim i As Integer
    
    On Error Resume Next
    Set xRg = Cells
    
    xFindArray = Array(".html?*", "*airport-*", "*-jetport-*", "*/locations/us/??.html", "*/locations/us/??/*.html", "*/locations/canada/??.html", "*/locations/canada/??/*.html")
    xRepArray = Array(".html", "Airport.html",  "Airport.html", "US-State.html", "US-City.html", "CA-Province.html", "CA-City.html")
    i = 0
    
    For Each xFindElement In xFindArray
        If xFindElement = "False" Or xRepElement = "False" Then Exit Sub
        xRepElement = xRepArray(i)
        xRg.Replace xFindElement, xRepElement, xlPart, xlByRows, False, False, False, False
        i = i + 1
    Next
MsgBox "Find and Replace complete! -Bill Gates"
End Sub