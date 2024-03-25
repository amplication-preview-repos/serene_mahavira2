import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CompanyCalendarList } from "./companyCalendar/CompanyCalendarList";
import { CompanyCalendarCreate } from "./companyCalendar/CompanyCalendarCreate";
import { CompanyCalendarEdit } from "./companyCalendar/CompanyCalendarEdit";
import { CompanyCalendarShow } from "./companyCalendar/CompanyCalendarShow";
import { CompanyDocumentList } from "./companyDocument/CompanyDocumentList";
import { CompanyDocumentCreate } from "./companyDocument/CompanyDocumentCreate";
import { CompanyDocumentEdit } from "./companyDocument/CompanyDocumentEdit";
import { CompanyDocumentShow } from "./companyDocument/CompanyDocumentShow";
import { CompanyJobList } from "./companyJob/CompanyJobList";
import { CompanyJobCreate } from "./companyJob/CompanyJobCreate";
import { CompanyJobEdit } from "./companyJob/CompanyJobEdit";
import { CompanyJobShow } from "./companyJob/CompanyJobShow";
import { CompanyJobApplyList } from "./companyJobApply/CompanyJobApplyList";
import { CompanyJobApplyCreate } from "./companyJobApply/CompanyJobApplyCreate";
import { CompanyJobApplyEdit } from "./companyJobApply/CompanyJobApplyEdit";
import { CompanyJobApplyShow } from "./companyJobApply/CompanyJobApplyShow";
import { CompanyNewList } from "./companyNew/CompanyNewList";
import { CompanyNewCreate } from "./companyNew/CompanyNewCreate";
import { CompanyNewEdit } from "./companyNew/CompanyNewEdit";
import { CompanyNewShow } from "./companyNew/CompanyNewShow";
import { CompanyRecognitionList } from "./companyRecognition/CompanyRecognitionList";
import { CompanyRecognitionCreate } from "./companyRecognition/CompanyRecognitionCreate";
import { CompanyRecognitionEdit } from "./companyRecognition/CompanyRecognitionEdit";
import { CompanyRecognitionShow } from "./companyRecognition/CompanyRecognitionShow";
import { CompanyStructureList } from "./companyStructure/CompanyStructureList";
import { CompanyStructureCreate } from "./companyStructure/CompanyStructureCreate";
import { CompanyStructureEdit } from "./companyStructure/CompanyStructureEdit";
import { CompanyStructureShow } from "./companyStructure/CompanyStructureShow";
import { CompanySurveyList } from "./companySurvey/CompanySurveyList";
import { CompanySurveyCreate } from "./companySurvey/CompanySurveyCreate";
import { CompanySurveyEdit } from "./companySurvey/CompanySurveyEdit";
import { CompanySurveyShow } from "./companySurvey/CompanySurveyShow";
import { CompanySurveyFieldList } from "./companySurveyField/CompanySurveyFieldList";
import { CompanySurveyFieldCreate } from "./companySurveyField/CompanySurveyFieldCreate";
import { CompanySurveyFieldEdit } from "./companySurveyField/CompanySurveyFieldEdit";
import { CompanySurveyFieldShow } from "./companySurveyField/CompanySurveyFieldShow";
import { MasterdataAssetList } from "./masterdataAsset/MasterdataAssetList";
import { MasterdataAssetCreate } from "./masterdataAsset/MasterdataAssetCreate";
import { MasterdataAssetEdit } from "./masterdataAsset/MasterdataAssetEdit";
import { MasterdataAssetShow } from "./masterdataAsset/MasterdataAssetShow";
import { MasterdataRoleList } from "./masterdataRole/MasterdataRoleList";
import { MasterdataRoleCreate } from "./masterdataRole/MasterdataRoleCreate";
import { MasterdataRoleEdit } from "./masterdataRole/MasterdataRoleEdit";
import { MasterdataRoleShow } from "./masterdataRole/MasterdataRoleShow";
import { MasterdataTaskList } from "./masterdataTask/MasterdataTaskList";
import { MasterdataTaskCreate } from "./masterdataTask/MasterdataTaskCreate";
import { MasterdataTaskEdit } from "./masterdataTask/MasterdataTaskEdit";
import { MasterdataTaskShow } from "./masterdataTask/MasterdataTaskShow";
import { MasterdataTimeOffList } from "./masterdataTimeOff/MasterdataTimeOffList";
import { MasterdataTimeOffCreate } from "./masterdataTimeOff/MasterdataTimeOffCreate";
import { MasterdataTimeOffEdit } from "./masterdataTimeOff/MasterdataTimeOffEdit";
import { MasterdataTimeOffShow } from "./masterdataTimeOff/MasterdataTimeOffShow";
import { UserAssetList } from "./userAsset/UserAssetList";
import { UserAssetCreate } from "./userAsset/UserAssetCreate";
import { UserAssetEdit } from "./userAsset/UserAssetEdit";
import { UserAssetShow } from "./userAsset/UserAssetShow";
import { UserExpenseRequestList } from "./userExpenseRequest/UserExpenseRequestList";
import { UserExpenseRequestCreate } from "./userExpenseRequest/UserExpenseRequestCreate";
import { UserExpenseRequestEdit } from "./userExpenseRequest/UserExpenseRequestEdit";
import { UserExpenseRequestShow } from "./userExpenseRequest/UserExpenseRequestShow";
import { UserInfoList } from "./userInfo/UserInfoList";
import { UserInfoCreate } from "./userInfo/UserInfoCreate";
import { UserInfoEdit } from "./userInfo/UserInfoEdit";
import { UserInfoShow } from "./userInfo/UserInfoShow";
import { UserNotificationList } from "./userNotification/UserNotificationList";
import { UserNotificationCreate } from "./userNotification/UserNotificationCreate";
import { UserNotificationEdit } from "./userNotification/UserNotificationEdit";
import { UserNotificationShow } from "./userNotification/UserNotificationShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { UserSurveyResponseList } from "./userSurveyResponse/UserSurveyResponseList";
import { UserSurveyResponseCreate } from "./userSurveyResponse/UserSurveyResponseCreate";
import { UserSurveyResponseEdit } from "./userSurveyResponse/UserSurveyResponseEdit";
import { UserSurveyResponseShow } from "./userSurveyResponse/UserSurveyResponseShow";
import { UserTimeOffRequestList } from "./userTimeOffRequest/UserTimeOffRequestList";
import { UserTimeOffRequestCreate } from "./userTimeOffRequest/UserTimeOffRequestCreate";
import { UserTimeOffRequestEdit } from "./userTimeOffRequest/UserTimeOffRequestEdit";
import { UserTimeOffRequestShow } from "./userTimeOffRequest/UserTimeOffRequestShow";
import { UserTimeTrackingRequestList } from "./userTimeTrackingRequest/UserTimeTrackingRequestList";
import { UserTimeTrackingRequestCreate } from "./userTimeTrackingRequest/UserTimeTrackingRequestCreate";
import { UserTimeTrackingRequestEdit } from "./userTimeTrackingRequest/UserTimeTrackingRequestEdit";
import { UserTimeTrackingRequestShow } from "./userTimeTrackingRequest/UserTimeTrackingRequestShow";
import { UserTimeTrackingRequestDetailList } from "./userTimeTrackingRequestDetail/UserTimeTrackingRequestDetailList";
import { UserTimeTrackingRequestDetailCreate } from "./userTimeTrackingRequestDetail/UserTimeTrackingRequestDetailCreate";
import { UserTimeTrackingRequestDetailEdit } from "./userTimeTrackingRequestDetail/UserTimeTrackingRequestDetailEdit";
import { UserTimeTrackingRequestDetailShow } from "./userTimeTrackingRequestDetail/UserTimeTrackingRequestDetailShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HR "}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CompanyCalendar"
          list={CompanyCalendarList}
          edit={CompanyCalendarEdit}
          create={CompanyCalendarCreate}
          show={CompanyCalendarShow}
        />
        <Resource
          name="CompanyDocument"
          list={CompanyDocumentList}
          edit={CompanyDocumentEdit}
          create={CompanyDocumentCreate}
          show={CompanyDocumentShow}
        />
        <Resource
          name="CompanyJob"
          list={CompanyJobList}
          edit={CompanyJobEdit}
          create={CompanyJobCreate}
          show={CompanyJobShow}
        />
        <Resource
          name="CompanyJobApply"
          list={CompanyJobApplyList}
          edit={CompanyJobApplyEdit}
          create={CompanyJobApplyCreate}
          show={CompanyJobApplyShow}
        />
        <Resource
          name="CompanyNew"
          list={CompanyNewList}
          edit={CompanyNewEdit}
          create={CompanyNewCreate}
          show={CompanyNewShow}
        />
        <Resource
          name="CompanyRecognition"
          list={CompanyRecognitionList}
          edit={CompanyRecognitionEdit}
          create={CompanyRecognitionCreate}
          show={CompanyRecognitionShow}
        />
        <Resource
          name="CompanyStructure"
          list={CompanyStructureList}
          edit={CompanyStructureEdit}
          create={CompanyStructureCreate}
          show={CompanyStructureShow}
        />
        <Resource
          name="CompanySurvey"
          list={CompanySurveyList}
          edit={CompanySurveyEdit}
          create={CompanySurveyCreate}
          show={CompanySurveyShow}
        />
        <Resource
          name="CompanySurveyField"
          list={CompanySurveyFieldList}
          edit={CompanySurveyFieldEdit}
          create={CompanySurveyFieldCreate}
          show={CompanySurveyFieldShow}
        />
        <Resource
          name="MasterdataAsset"
          list={MasterdataAssetList}
          edit={MasterdataAssetEdit}
          create={MasterdataAssetCreate}
          show={MasterdataAssetShow}
        />
        <Resource
          name="MasterdataRole"
          list={MasterdataRoleList}
          edit={MasterdataRoleEdit}
          create={MasterdataRoleCreate}
          show={MasterdataRoleShow}
        />
        <Resource
          name="MasterdataTask"
          list={MasterdataTaskList}
          edit={MasterdataTaskEdit}
          create={MasterdataTaskCreate}
          show={MasterdataTaskShow}
        />
        <Resource
          name="MasterdataTimeOff"
          list={MasterdataTimeOffList}
          edit={MasterdataTimeOffEdit}
          create={MasterdataTimeOffCreate}
          show={MasterdataTimeOffShow}
        />
        <Resource
          name="UserAsset"
          list={UserAssetList}
          edit={UserAssetEdit}
          create={UserAssetCreate}
          show={UserAssetShow}
        />
        <Resource
          name="UserExpenseRequest"
          list={UserExpenseRequestList}
          edit={UserExpenseRequestEdit}
          create={UserExpenseRequestCreate}
          show={UserExpenseRequestShow}
        />
        <Resource
          name="UserInfo"
          list={UserInfoList}
          edit={UserInfoEdit}
          create={UserInfoCreate}
          show={UserInfoShow}
        />
        <Resource
          name="UserNotification"
          list={UserNotificationList}
          edit={UserNotificationEdit}
          create={UserNotificationCreate}
          show={UserNotificationShow}
        />
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="UserSurveyResponse"
          list={UserSurveyResponseList}
          edit={UserSurveyResponseEdit}
          create={UserSurveyResponseCreate}
          show={UserSurveyResponseShow}
        />
        <Resource
          name="UserTimeOffRequest"
          list={UserTimeOffRequestList}
          edit={UserTimeOffRequestEdit}
          create={UserTimeOffRequestCreate}
          show={UserTimeOffRequestShow}
        />
        <Resource
          name="UserTimeTrackingRequest"
          list={UserTimeTrackingRequestList}
          edit={UserTimeTrackingRequestEdit}
          create={UserTimeTrackingRequestCreate}
          show={UserTimeTrackingRequestShow}
        />
        <Resource
          name="UserTimeTrackingRequestDetail"
          list={UserTimeTrackingRequestDetailList}
          edit={UserTimeTrackingRequestDetailEdit}
          create={UserTimeTrackingRequestDetailCreate}
          show={UserTimeTrackingRequestDetailShow}
        />
      </Admin>
    </div>
  );
};

export default App;
