Sub FindandReplaceNat_CA()
    Dim xFindArray As Variant
    Dim xFindElement As Variant
    
    Dim xRepArray As Variant
    Dim xRepElement As Variant
    
    Dim xRg As Range
    Dim i As Integer
    
    On Error Resume Next
    Set xRg = Cells
    
    xFindArray = Array(".html?*", "http://www.nationalcar.ca/en/home.html")
    xRepArray = Array(".html", "https://www.nationalcar.ca/en/home.html")
    i = 0
    
    For Each xFindElement In xFindArray
        If xFindElement = "False" Or xRepElement = "False" Then Exit Sub
        xRepElement = xRepArray(i)
        xRg.Replace xFindElement, xRepElement, xlPart, xlByRows, False, False, False, False
        i = i + 1
    Next
MsgBox "Find and Replace complete!"
End Sub