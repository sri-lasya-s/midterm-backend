# UxResearchStudyTrackerApi.DefaultApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**studyServiceActive**](DefaultApi.md#studyServiceActive) | **GET** /active-studies | Get active studies
[**studyServiceCreate**](DefaultApi.md#studyServiceCreate) | **POST** / | Create study
[**studyServiceDelete**](DefaultApi.md#studyServiceDelete) | **DELETE** /{id} | Delete study
[**studyServiceGet**](DefaultApi.md#studyServiceGet) | **GET** /{id} | Get study by ID
[**studyServiceList**](DefaultApi.md#studyServiceList) | **GET** / | Get all studies
[**studyServiceUpdate**](DefaultApi.md#studyServiceUpdate) | **PATCH** /{id} | Update study



## studyServiceActive

> studyServiceActive()

Get active studies

### Example

```javascript
import UxResearchStudyTrackerApi from 'ux_research_study_tracker_api';

let apiInstance = new UxResearchStudyTrackerApi.DefaultApi();
apiInstance.studyServiceActive((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## studyServiceCreate

> studyServiceCreate(studyCreate)

Create study

### Example

```javascript
import UxResearchStudyTrackerApi from 'ux_research_study_tracker_api';

let apiInstance = new UxResearchStudyTrackerApi.DefaultApi();
let studyCreate = new UxResearchStudyTrackerApi.StudyCreate(); // StudyCreate | 
apiInstance.studyServiceCreate(studyCreate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studyCreate** | [**StudyCreate**](StudyCreate.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## studyServiceDelete

> studyServiceDelete(id)

Delete study

### Example

```javascript
import UxResearchStudyTrackerApi from 'ux_research_study_tracker_api';

let apiInstance = new UxResearchStudyTrackerApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.studyServiceDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## studyServiceGet

> studyServiceGet(id)

Get study by ID

### Example

```javascript
import UxResearchStudyTrackerApi from 'ux_research_study_tracker_api';

let apiInstance = new UxResearchStudyTrackerApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.studyServiceGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## studyServiceList

> studyServiceList()

Get all studies

### Example

```javascript
import UxResearchStudyTrackerApi from 'ux_research_study_tracker_api';

let apiInstance = new UxResearchStudyTrackerApi.DefaultApi();
apiInstance.studyServiceList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## studyServiceUpdate

> studyServiceUpdate(id, opts)

Update study

### Example

```javascript
import UxResearchStudyTrackerApi from 'ux_research_study_tracker_api';

let apiInstance = new UxResearchStudyTrackerApi.DefaultApi();
let id = "id_example"; // String | 
let opts = {
  'studyUpdate': new UxResearchStudyTrackerApi.StudyUpdate() // StudyUpdate | 
};
apiInstance.studyServiceUpdate(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **studyUpdate** | [**StudyUpdate**](StudyUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

