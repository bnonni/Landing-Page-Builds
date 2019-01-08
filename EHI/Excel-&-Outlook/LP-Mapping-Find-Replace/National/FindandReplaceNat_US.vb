Sub FindandReplaceNat_US()
    Dim xFindArray As Variant
    Dim xFindElement As Variant
    
    Dim xRepArray As Variant
    Dim xRepElement As Variant
    
    Dim xRg As Range
    Dim i As Integer
    
    On Error Resume Next
    Set xRg = Cells
    
    xFindArray = Array(".html?*", "*airport*", "*-apt-*", "*/locations/us/??.html", "*/locations/us/??/*.html", "*/vehicles/us/*.html")
    xRepArray = Array(".html", "Airport.html",  "Airport.html", "State.html", "City.html", "Vehicles.html")
    i = 0
    
    For Each xFindElement In xFindArray
        If xFindElement = "False" Or xRepElement = "False" Then Exit Sub
        xRepElement = xRepArray(i)
        xRg.Replace xFindElement, xRepElement, xlPart, xlByRows, False, False, False, False
        i = i + 1
    Next
MsgBox "Find and Replace complete!"
End Sub