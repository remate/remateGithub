/**
 * 
 */
package com.vdlm.spider.bean;

import java.io.Serializable;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.JSONSerializer;
import com.alibaba.fastjson.serializer.SerializeWriter;
import com.alibaba.fastjson.util.ThreadLocalCache;
import com.vdlm.spider.DataSource;
import com.vdlm.spider.DeviceType;
import com.vdlm.spider.ParserType;
import com.vdlm.spider.ReqFrom;
import com.vdlm.spider.task.TaskType;

/**
 * @author Wayne.Wang<5waynewang@gmail.com>
 * @since 5:16:14 PM Jul 19, 2014
 */
public class TaskBean implements Serializable {

	private static final long serialVersionUID = 1802998747586288798L;
	private String taskId;
	private int retryTimes; // 重试次数
	private boolean retry = true; // 是否需要重试
	private boolean retryIncr = true; // 是否递增重试次数
	private long createTimeMillis = System.currentTimeMillis();// 创建时间
	private ParserType parserType;
	private ReqFrom reqFrom = ReqFrom.KKKD;//请求来源
	private DeviceType deviceType = DeviceType.OTHER; // 设备类型
	private DataSource dataSource = DataSource.MOBILE;
	
	private TaskType taskType = TaskType.DEFAULT;

	public String getTaskId() {
		return taskId;
	}
	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}
	
	public int getRetryTimes() {
		return retryTimes;
	}
	public void setRetryTimes(int retryTimes) {
		this.retryTimes = retryTimes;
	}
	public int retryTimes() {
		return this.retryTimes(true);
	}
	public int retryTimes(boolean incr) {
		return incr ? ++this.retryTimes : this.retryTimes;
	}
	
	public boolean isRetry() {
		return retry;
	}
	public void setRetry(boolean retry) {
		this.retry = retry;
	}

	public boolean isRetryIncr() {
		return retryIncr;
	}
	public void setRetryIncr(boolean retryIncr) {
		this.retryIncr = retryIncr;
	}
	
	public DeviceType getDeviceType() {
		return deviceType;
	}

	public void setDeviceType(DeviceType deviceType) {
		this.deviceType = deviceType;
	}

	public ReqFrom getReqFrom() {
		return reqFrom;
	}

	public void setReqFrom(ReqFrom reqFrom) {
		this.reqFrom = reqFrom;
	}

	public ParserType getParserType() {
		return parserType;
	}

	public void setParserType(ParserType parserType) {
		this.parserType = parserType;
	}

	public long getCreateTimeMillis() {
		return createTimeMillis;
	}

	public void setCreateTimeMillis(long createTimeMillis) {
		this.createTimeMillis = createTimeMillis;
	}
	
	public byte[] toJSONBytes() {
		final SerializeWriter out = new SerializeWriter();
		try {
			final JSONSerializer serializer = new JSONSerializer(out);
			serializer.write(this);
			return out.toBytes("UTF-8");
		}
		finally {
			out.close();
		}
	}
	
	public static <T extends TaskBean> T parse(byte[] bytes, Class<T> clazz) {
		return JSON.parseObject(bytes, 0, bytes.length, ThreadLocalCache.getUTF8Decoder(), clazz);
	}
	
	public TaskType getTaskType() {
		return taskType;
	}
	
	public void setTaskType(TaskType taskType) {
		this.taskType = taskType;
	}
	
	@Override
	public String toString() {
		return JSON.toJSONString(this);
	}
	public DataSource getDataSource() {
		return dataSource;
	}
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
}
