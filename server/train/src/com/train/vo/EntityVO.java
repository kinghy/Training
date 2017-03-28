package com.train.vo;

/**
 * Created by rjt on 17/3/28.
 */
public class EntityVO {
    private String result;
    private String errorCode;
    private String errorMsg;

    static final public String RETURN_SUCCESS = "Y";
    static final public String RETURN_FAILED = "N";

    {
        result = RETURN_SUCCESS;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
