import { Company } from "./company.model";
import { Question } from "./question.model";
import { Page } from "./page.model";
import { Parameter } from "./parameter.model";
import { Rate } from "./rate.model";
import { DynamicRateCondition } from "./dynamic-rate-condition.model";
import { Condition } from './condition.model';
import { OptionGroup } from './option-groups.model';

export class Answer {
    constructor(
      public id?: string,
      public isInput?: boolean,
      public isSelect?: boolean,
      public isNativeSelect?: boolean,
      public isDatePicker?: boolean,
      public isMobileDatePicker?: boolean,
      public isButton?: boolean,
      public isTextarea?: boolean,
      public isAutocomplete?: boolean,
      public isProgressButton?: boolean,
      public isRequired?: boolean,
      public hasSuffix?: boolean,
      public hasPrefix?: boolean,
      public suffixText?: string,
      public prefixText?: string,
      public placeholderText?: string,
      public hasSecondaryPlaceholder?: boolean,
      public secondaryPlaceholderText?: string,
      public propertyValue?: string,
      public propertyKey?: string,
      public displayValue?: string,
      public startDate?: string,
      public width?: string,
      public position?: number,
      public hasCustomHtml?: boolean,
      public isPrevNextButtons?: boolean,
      public customAnswerHtml?: string,
      public fireNewLead?: boolean,
      public isVehicleVIN?: boolean,
      public isVehicleYear?: boolean,
      public isVehicleMakeModel?: boolean,
      public isAddressSearch?: boolean,
      public isAddVehicle?: boolean,
      public isAddDriver?: boolean,
      public hasInformationIcon?: boolean,
      public informationIconText?: string,
      public errorText?: string,
      public isConditional?: boolean,
      public isConditionParent?: boolean,
      public conditionValue?: string,
      public conditionKey?: string,
      public options?: string[],
      public isAgeInput?: boolean,
      public isViolationTracker?: boolean,
      public isCheckbox?: boolean,
      public questionAnswerId?: number,
      public companyAnswerId?: number,
      public company?: Company,
      public parameters?: Parameter[],
      public rates?: Rate[],
      public conditions?: DynamicRateCondition[],
      public dateStartView?: string,
      public hasFilter?: boolean,
      public isSquareFootage?: boolean,
      public isHomeFinishings?: boolean,
      public isFirstName?: boolean,
      public isLastName?: boolean,
      public isEmail?: boolean,
      public isPhone?: boolean,
      public isSpacer?: boolean,
      public filterCondition?: string,
      public defaultValue?: string,
      public isClient?: boolean,
      public usDotKey?: string,
      public ezlynxKey?: string,
      public hawksoftKey?: string,
      public isText?: boolean,
      public isVehicleMake?: boolean,
      public isVehicleModel?: boolean,
      public isVehicleBodyStyle?: boolean,
      public getHomeData?: boolean,
      public objectName?: string,
      public getUSDotData?: boolean,
      public getRate?: boolean,
      public style?: string,
      public isHiddenInput?: boolean,
      public isAddLocation?: boolean,
      public isSecureDocumentUpload?: boolean,
      public isPasswordInput?: boolean,
      public isLink?: boolean,
      public isCard?: boolean,
      public isMultipleSelect?: boolean,
      public isAddHome?: boolean,
      public isAddIncident?: boolean,
      public isAddRecreationalVehicle?: boolean,
      public isAddPolicy?: boolean,
      public isSelectObject?: boolean,
      public selectObjectName?: string,
      public headerText?: string,
      public icon?: string,
      public labelPosition?: string,
      public transformResponse?: string,
      public question?: Question,
      public page?: Page,
      public answerConditions?: Condition[],
      public isLoginWithFacebook?: boolean,
      public isLoginWithGoogle?: boolean,
      public stopTransition?: boolean,
      public isOccupation?: boolean,
      public isIndustry?: boolean,
      public hasLabeledSelectOptions?: boolean,
      public labeledSelectOptions?: OptionGroup[],
    ){}
}
  