Sub FindandReplaceAlamo_US_One()
    Dim xFindArray As Variant
    Dim xFindElement As Variant
    
    Dim xRepArray As Variant
    Dim xRepElement As Variant
    
    Dim xRg As Range
    Dim i As Integer
    
    On Error Resume Next
    Set xRg = Cells
    
    xFindArray = Array(".html?*", "*airport*", "*-bellingham-*", "*pdx-walkup*", "*/yngt71-yng*", "*-international-*", "*-west-palm-*", "*lwbt71-lwb*", "*chso71-charleston*", "*-tri-city-blountville*", "*/cars*")
    xRepArray = Array(".html", "Airport.html", "Airport.html", "Airport.html", "Airport.html", "Airport.html", "Airport.html", "Airport.html", "Airport.html", "Airport.html", "Cars.html")
    i = 0
    
    For Each xFindElement In xFindArray
        xRepElement = xRepArray(i)
        xRg.Replace xFindElement, xRepElement, xlPart, xlByRows, False, False, False, False
        i = i + 1
    Next
    MsgBox "Entering phase two."
    Call FindandReplaceAlamo_US_Two
End Sub
Sub FindandReplaceAlamo_US_Two()
    Dim xFindArray2 As Variant
    Dim xFindElement2 As Variant
    
    Dim xRepArray2 As Variant
    Dim xRepElement2 As Variant
     
    Dim xRg2 As Range
    Dim j As Integer
    
    On Error Resume Next
    Set xRg2 = Cells
    
    xFindArray2 = Array("*/locations/us/????7?-*-*.html", "*/location-results*", "*/locations/us/*-*-*.html", "*/locations/us/*-*.html", "*/locations/us/hawaii.html")
    xRepArray2 = Array("Other-Location.html", "Location-Results.html", "City.html", "City.html", "State.html")
    j = 0
    
    For Each xFindElement2 In xFindArray2
        xRepElement2 = xRepArray2(j)
        xRg2.Replace xFindElement2, xRepElement2, xlPart, xlByRows, False, False, False, False
        j = j + 1
    Next
MsgBox "Find and Replace complete!"
End Sub

