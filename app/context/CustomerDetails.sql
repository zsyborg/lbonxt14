SELECT TOP (1000) *
FROM [lifeisdata].[dbo].CustomerAddresses ca
INNER JOIN [lifeisdata].[dbo].Address a ON ca.Address_Id = a.Id
WHERE ca.Customer_Id = 380296;
/*Select TOP 100 * FROM [lifeisdata].[dbo].[MemJoining_Dtls] ORDER BY MJD_DOJ DESC*/
/*
SELECT * FROM lifeisdata.dbo.Customer WHERE Id = 464676
*/


/*SELECT TOP 10 * FROM lifeisdata.dbo.MemDownline_Dtls WHERE MDD_ID = 380296*/
SELECT TOP 10 * FROM lifeisdata.dbo.MemProfile_Dtls WHERE MJD_MemNo = 'LBO5239095'
/*SELECT  TOP 10 * FROM lifeisdata.dbo.MemJoining_Dtls ORDER BY MJD_MemID DESC*/
/*SELECT  TOP 10 * FROM lifeisdata.dbo.MemActDownline_Bal WHERE MDD_MemID = 380296*/
SELECT  TOP 10 * FROM lifeisdata.dbo.CustomerPassword WHERE UserName = 'LBO5239095'