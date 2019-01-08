SELECT 
    app_name,
    DATE(COALESCE(date_occurred, date_received)) AS date_utc,
    network_name,
    COALESCE(JSON_EXTRACT_SCALAR(match_object, '$.dcmcampaign_id'), REGEXP_EXTRACT(LTRIM(RTRIM(JSON_EXTRACT(match_object, '$.original_request'), '"'), '"'), '[?&]dcmcampaign_id=([^&]+)'), REGEXP_EXTRACT('?' + original_request, '[?&]dcmcampaign_id=([^&]+)')) as dcm_campaign_id,
    site_id as dcm_placement_id,
    creative_id as dcm_creative_id,
    COUNT(DISTINCT click_id) AS click_count,
    COUNT(DISTINCT i_install_id) AS install_count,
    COUNT(DISTINCT(CASE WHEN event_name = 'Place Order' THEN event_id ELSE NULL END)) AS place_order_count,
FROM (SELECT 'Delivery Android PROD' AS app_name, * FROM app_25209.clicks_primary),
     (SELECT 'Delivery iOS PROD' AS app_name, * FROM app_25211.clicks_primary),
     (SELECT 'Delivery Android PROD' AS app_name, install_id AS i_install_id, * FROM app_25209.installs_primary),
     (SELECT 'Delivery iOS PROD' AS app_name, install_id AS i_install_id, * FROM app_25211.installs_primary),
     (SELECT 'Delivery Android PROD' AS app_name, * FROM app_25209.events_primary WHERE event_name = 'Place Order'),
     (SELECT 'Delivery iOS PROD' AS app_name, * FROM app_25211.events_primary WHERE event_name = 'Place Order')
WHERE date_occurred >= '2018-10-01 00:00:00' AND date_occurred < '2018-10-15 00:00:00' AND campaign_name in ('7Now_DisplayCampaign_IOS','360i - 7Now_DisplayCampaign_Android')
GROUP BY app_name,
    date_utc,
    network_name,
    dcm_campaign_id,
    dcm_placement_id,
    dcm_creative_id
ORDER BY app_name,
    date_utc,
    network_name,
    dcm_campaign_id,
    dcm_placement_id,
    dcm_creative_id