//ctrl+q//
Sub FindandReplaceERAC_CA()
    Dim xFindArray As Variant
    Dim xFindElement As Variant
    
    Dim xRepArray As Variant
    Dim xRepElement As Variant
    
    Dim xRg As Range
    Dim j As Integer
    
    On Error Resume Next
    Set xRg = Cells
    
    xFindArray = Array(".html?*", "*airport-*", "*/vehicles/ca/*.html")
    xRepArray = Array(".html", "Airport.html", "Vehicles.html")
    j = 0
    
    For Each xFindElement In xFindArray
        If xFindElement = "False" Or xRepElement = "False" Then Exit Sub
        xRepElement = xRepArray(j)
        xRg.Replace xFindElement, xRepElement, xlPart, xlByRows, False, False, False, False
        j = j + 1
    Next
MsgBox "Find and Replace complete! -Bill Gates"
End Sub