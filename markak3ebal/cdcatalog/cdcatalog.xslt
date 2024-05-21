<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" version="5" omit-xml-declaration="yes" />
    <xsl:template match="/catalog">

    <html>
        <head>
            <title>Musika</title>
        </head>
        <body>
            <h2>Musika Diskak</h2>
            <ul>
            <xsl:for-each select="cd[country='EU']">
                <li><xsl:value-of select="title"></xsl:value-of></li>
            </xsl:for-each>
            </ul>
        </body>
    </html>

    </xsl:template>
</xsl:stylesheet>

attribute
foreach
if
attribute
output
sort
text
template
value of
*/