"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import google.protobuf.any_pb2
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.internal.enum_type_wrapper
import google.protobuf.message
import google.protobuf.source_context_pb2
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor = ...

class Syntax(_Syntax, metaclass=_SyntaxEnumTypeWrapper):
    """The syntax in which a protocol buffer element is defined."""
    pass
class _Syntax:
    V = typing.NewType('V', builtins.int)
class _SyntaxEnumTypeWrapper(google.protobuf.internal.enum_type_wrapper._EnumTypeWrapper[_Syntax.V], builtins.type):
    DESCRIPTOR: google.protobuf.descriptor.EnumDescriptor = ...
    SYNTAX_PROTO2 = Syntax.V(0)
    """Syntax `proto2`."""

    SYNTAX_PROTO3 = Syntax.V(1)
    """Syntax `proto3`."""


SYNTAX_PROTO2 = Syntax.V(0)
"""Syntax `proto2`."""

SYNTAX_PROTO3 = Syntax.V(1)
"""Syntax `proto3`."""

global___Syntax = Syntax


class Type(google.protobuf.message.Message):
    """A protocol buffer message type."""
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    NAME_FIELD_NUMBER: builtins.int
    FIELDS_FIELD_NUMBER: builtins.int
    ONEOFS_FIELD_NUMBER: builtins.int
    OPTIONS_FIELD_NUMBER: builtins.int
    SOURCE_CONTEXT_FIELD_NUMBER: builtins.int
    SYNTAX_FIELD_NUMBER: builtins.int
    name: typing.Text = ...
    """The fully qualified message name."""

    @property
    def fields(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Field]:
        """The list of fields."""
        pass
    @property
    def oneofs(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[typing.Text]:
        """The list of types appearing in `oneof` definitions in this type."""
        pass
    @property
    def options(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Option]:
        """The protocol buffer options."""
        pass
    @property
    def source_context(self) -> google.protobuf.source_context_pb2.SourceContext:
        """The source context."""
        pass
    syntax: global___Syntax.V = ...
    """The source syntax."""

    def __init__(self,
        *,
        name : typing.Text = ...,
        fields : typing.Optional[typing.Iterable[global___Field]] = ...,
        oneofs : typing.Optional[typing.Iterable[typing.Text]] = ...,
        options : typing.Optional[typing.Iterable[global___Option]] = ...,
        source_context : typing.Optional[google.protobuf.source_context_pb2.SourceContext] = ...,
        syntax : global___Syntax.V = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["source_context",b"source_context"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["fields",b"fields","name",b"name","oneofs",b"oneofs","options",b"options","source_context",b"source_context","syntax",b"syntax"]) -> None: ...
global___Type = Type

class Field(google.protobuf.message.Message):
    """A single field of a message type."""
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    class Kind(_Kind, metaclass=_KindEnumTypeWrapper):
        """Basic field types."""
        pass
    class _Kind:
        V = typing.NewType('V', builtins.int)
    class _KindEnumTypeWrapper(google.protobuf.internal.enum_type_wrapper._EnumTypeWrapper[_Kind.V], builtins.type):
        DESCRIPTOR: google.protobuf.descriptor.EnumDescriptor = ...
        TYPE_UNKNOWN = Field.Kind.V(0)
        """Field type unknown."""

        TYPE_DOUBLE = Field.Kind.V(1)
        """Field type double."""

        TYPE_FLOAT = Field.Kind.V(2)
        """Field type float."""

        TYPE_INT64 = Field.Kind.V(3)
        """Field type int64."""

        TYPE_UINT64 = Field.Kind.V(4)
        """Field type uint64."""

        TYPE_INT32 = Field.Kind.V(5)
        """Field type int32."""

        TYPE_FIXED64 = Field.Kind.V(6)
        """Field type fixed64."""

        TYPE_FIXED32 = Field.Kind.V(7)
        """Field type fixed32."""

        TYPE_BOOL = Field.Kind.V(8)
        """Field type bool."""

        TYPE_STRING = Field.Kind.V(9)
        """Field type string."""

        TYPE_GROUP = Field.Kind.V(10)
        """Field type group. Proto2 syntax only, and deprecated."""

        TYPE_MESSAGE = Field.Kind.V(11)
        """Field type message."""

        TYPE_BYTES = Field.Kind.V(12)
        """Field type bytes."""

        TYPE_UINT32 = Field.Kind.V(13)
        """Field type uint32."""

        TYPE_ENUM = Field.Kind.V(14)
        """Field type enum."""

        TYPE_SFIXED32 = Field.Kind.V(15)
        """Field type sfixed32."""

        TYPE_SFIXED64 = Field.Kind.V(16)
        """Field type sfixed64."""

        TYPE_SINT32 = Field.Kind.V(17)
        """Field type sint32."""

        TYPE_SINT64 = Field.Kind.V(18)
        """Field type sint64."""


    TYPE_UNKNOWN = Field.Kind.V(0)
    """Field type unknown."""

    TYPE_DOUBLE = Field.Kind.V(1)
    """Field type double."""

    TYPE_FLOAT = Field.Kind.V(2)
    """Field type float."""

    TYPE_INT64 = Field.Kind.V(3)
    """Field type int64."""

    TYPE_UINT64 = Field.Kind.V(4)
    """Field type uint64."""

    TYPE_INT32 = Field.Kind.V(5)
    """Field type int32."""

    TYPE_FIXED64 = Field.Kind.V(6)
    """Field type fixed64."""

    TYPE_FIXED32 = Field.Kind.V(7)
    """Field type fixed32."""

    TYPE_BOOL = Field.Kind.V(8)
    """Field type bool."""

    TYPE_STRING = Field.Kind.V(9)
    """Field type string."""

    TYPE_GROUP = Field.Kind.V(10)
    """Field type group. Proto2 syntax only, and deprecated."""

    TYPE_MESSAGE = Field.Kind.V(11)
    """Field type message."""

    TYPE_BYTES = Field.Kind.V(12)
    """Field type bytes."""

    TYPE_UINT32 = Field.Kind.V(13)
    """Field type uint32."""

    TYPE_ENUM = Field.Kind.V(14)
    """Field type enum."""

    TYPE_SFIXED32 = Field.Kind.V(15)
    """Field type sfixed32."""

    TYPE_SFIXED64 = Field.Kind.V(16)
    """Field type sfixed64."""

    TYPE_SINT32 = Field.Kind.V(17)
    """Field type sint32."""

    TYPE_SINT64 = Field.Kind.V(18)
    """Field type sint64."""


    class Cardinality(_Cardinality, metaclass=_CardinalityEnumTypeWrapper):
        """Whether a field is optional, required, or repeated."""
        pass
    class _Cardinality:
        V = typing.NewType('V', builtins.int)
    class _CardinalityEnumTypeWrapper(google.protobuf.internal.enum_type_wrapper._EnumTypeWrapper[_Cardinality.V], builtins.type):
        DESCRIPTOR: google.protobuf.descriptor.EnumDescriptor = ...
        CARDINALITY_UNKNOWN = Field.Cardinality.V(0)
        """For fields with unknown cardinality."""

        CARDINALITY_OPTIONAL = Field.Cardinality.V(1)
        """For optional fields."""

        CARDINALITY_REQUIRED = Field.Cardinality.V(2)
        """For required fields. Proto2 syntax only."""

        CARDINALITY_REPEATED = Field.Cardinality.V(3)
        """For repeated fields."""


    CARDINALITY_UNKNOWN = Field.Cardinality.V(0)
    """For fields with unknown cardinality."""

    CARDINALITY_OPTIONAL = Field.Cardinality.V(1)
    """For optional fields."""

    CARDINALITY_REQUIRED = Field.Cardinality.V(2)
    """For required fields. Proto2 syntax only."""

    CARDINALITY_REPEATED = Field.Cardinality.V(3)
    """For repeated fields."""


    KIND_FIELD_NUMBER: builtins.int
    CARDINALITY_FIELD_NUMBER: builtins.int
    NUMBER_FIELD_NUMBER: builtins.int
    NAME_FIELD_NUMBER: builtins.int
    TYPE_URL_FIELD_NUMBER: builtins.int
    ONEOF_INDEX_FIELD_NUMBER: builtins.int
    PACKED_FIELD_NUMBER: builtins.int
    OPTIONS_FIELD_NUMBER: builtins.int
    JSON_NAME_FIELD_NUMBER: builtins.int
    DEFAULT_VALUE_FIELD_NUMBER: builtins.int
    kind: global___Field.Kind.V = ...
    """The field type."""

    cardinality: global___Field.Cardinality.V = ...
    """The field cardinality."""

    number: builtins.int = ...
    """The field number."""

    name: typing.Text = ...
    """The field name."""

    type_url: typing.Text = ...
    """The field type URL, without the scheme, for message or enumeration
    types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
    """

    oneof_index: builtins.int = ...
    """The index of the field type in `Type.oneofs`, for message or enumeration
    types. The first type has index 1; zero means the type is not in the list.
    """

    packed: builtins.bool = ...
    """Whether to use alternative packed wire representation."""

    @property
    def options(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Option]:
        """The protocol buffer options."""
        pass
    json_name: typing.Text = ...
    """The field JSON name."""

    default_value: typing.Text = ...
    """The string value of the default value of this field. Proto2 syntax only."""

    def __init__(self,
        *,
        kind : global___Field.Kind.V = ...,
        cardinality : global___Field.Cardinality.V = ...,
        number : builtins.int = ...,
        name : typing.Text = ...,
        type_url : typing.Text = ...,
        oneof_index : builtins.int = ...,
        packed : builtins.bool = ...,
        options : typing.Optional[typing.Iterable[global___Option]] = ...,
        json_name : typing.Text = ...,
        default_value : typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["cardinality",b"cardinality","default_value",b"default_value","json_name",b"json_name","kind",b"kind","name",b"name","number",b"number","oneof_index",b"oneof_index","options",b"options","packed",b"packed","type_url",b"type_url"]) -> None: ...
global___Field = Field

class Enum(google.protobuf.message.Message):
    """Enum type definition."""
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    NAME_FIELD_NUMBER: builtins.int
    ENUMVALUE_FIELD_NUMBER: builtins.int
    OPTIONS_FIELD_NUMBER: builtins.int
    SOURCE_CONTEXT_FIELD_NUMBER: builtins.int
    SYNTAX_FIELD_NUMBER: builtins.int
    name: typing.Text = ...
    """Enum type name."""

    @property
    def enumvalue(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___EnumValue]:
        """Enum value definitions."""
        pass
    @property
    def options(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Option]:
        """Protocol buffer options."""
        pass
    @property
    def source_context(self) -> google.protobuf.source_context_pb2.SourceContext:
        """The source context."""
        pass
    syntax: global___Syntax.V = ...
    """The source syntax."""

    def __init__(self,
        *,
        name : typing.Text = ...,
        enumvalue : typing.Optional[typing.Iterable[global___EnumValue]] = ...,
        options : typing.Optional[typing.Iterable[global___Option]] = ...,
        source_context : typing.Optional[google.protobuf.source_context_pb2.SourceContext] = ...,
        syntax : global___Syntax.V = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["source_context",b"source_context"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["enumvalue",b"enumvalue","name",b"name","options",b"options","source_context",b"source_context","syntax",b"syntax"]) -> None: ...
global___Enum = Enum

class EnumValue(google.protobuf.message.Message):
    """Enum value definition."""
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    NAME_FIELD_NUMBER: builtins.int
    NUMBER_FIELD_NUMBER: builtins.int
    OPTIONS_FIELD_NUMBER: builtins.int
    name: typing.Text = ...
    """Enum value name."""

    number: builtins.int = ...
    """Enum value number."""

    @property
    def options(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Option]:
        """Protocol buffer options."""
        pass
    def __init__(self,
        *,
        name : typing.Text = ...,
        number : builtins.int = ...,
        options : typing.Optional[typing.Iterable[global___Option]] = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["name",b"name","number",b"number","options",b"options"]) -> None: ...
global___EnumValue = EnumValue

class Option(google.protobuf.message.Message):
    """A protocol buffer option, which can be attached to a message, field,
    enumeration, etc.
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    NAME_FIELD_NUMBER: builtins.int
    VALUE_FIELD_NUMBER: builtins.int
    name: typing.Text = ...
    """The option's name. For protobuf built-in options (options defined in
    descriptor.proto), this is the short name. For example, `"map_entry"`.
    For custom options, it should be the fully-qualified name. For example,
    `"google.api.http"`.
    """

    @property
    def value(self) -> google.protobuf.any_pb2.Any:
        """The option's value packed in an Any message. If the value is a primitive,
        the corresponding wrapper type defined in google/protobuf/wrappers.proto
        should be used. If the value is an enum, it should be stored as an int32
        value using the google.protobuf.Int32Value type.
        """
        pass
    def __init__(self,
        *,
        name : typing.Text = ...,
        value : typing.Optional[google.protobuf.any_pb2.Any] = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["value",b"value"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["name",b"name","value",b"value"]) -> None: ...
global___Option = Option